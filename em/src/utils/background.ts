import * as THREE from 'three';

export function createBackground(container: HTMLElement) {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let material: THREE.ShaderMaterial;

    function onResize() {
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    scene = new THREE.Scene();

    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = width / height;

    camera = new THREE.PerspectiveCamera(75, aspect, 1, 100);
    camera.position.z = 3;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);

    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onResize);

    const geometry = new THREE.PlaneGeometry(9, 5, 200, 100);

    material = new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        uniforms: {
            time: { value: 0.2 },
            speed: { value: 0.0009 },
            waveDefinition: { value: 2.4 },
            waveAmplitude: { value: 0.1 },
            topoDefinition: { value: 30 },
            topoColor: { value: new THREE.Color("#808080") },
            scale: { value: 1 }
        },
        vertexShader: `
            vec3 mod289(vec3 x) {
                return x - floor(x * (1.0 / 289.0)) * 289.0;
            }
            vec2 mod289(vec2 x) {
                return x - floor(x * (1.0 / 289.0)) * 289.0;
            }
            vec3 permute(vec3 x) {
                return mod289(((x*34.0)+1.0)*x);
            }
            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                vec2 i  = floor(v + dot(v, C.yy) );
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1;
                i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i);
                vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m ;
                m = m*m ;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }
            uniform float time;
            uniform float waveDefinition;
            uniform float waveAmplitude;
            uniform float scale;
            varying vec3 vPosition;
            void main(void) {
                float newZ = snoise(uv) + snoise((uv * waveDefinition) + time);
                newZ *= waveAmplitude;
                vec3 newPosition = vec3(position.xy * vec2(scale, 1.0), position.z + newZ);
                vPosition = newPosition;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
            }
        `,
        fragmentShader: `
            float map(float value, float inMin, float inMax, float outMin, float outMax) {
                return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
            }
            
            uniform float waveAmplitude;
            uniform float topoDefinition;
            uniform vec3 topoColor;
            varying vec3 vPosition;
            void main(void) {
                float coord = vPosition.z * topoDefinition;
                float line = abs(fract(coord - 0.9) - 0.1) / fwidth(coord);
                line /= 1.5;
                gl_FragColor = vec4(topoColor, 1.2 - line);
            }
        `
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 0;
    mesh.rotation.x = 0;
    scene.add(mesh);

    function draw() {
        renderer.render(scene, camera);
        requestAnimationFrame(draw);
        material.uniforms.time.value += material.uniforms.speed.value;
    }

    draw();
}