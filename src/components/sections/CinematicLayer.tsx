import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function CinematicLayer({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const PARTICLE_COUNT = 140

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    )
    camera.position.z = 12

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    mount.appendChild(renderer.domElement)

    const spriteCanvas = document.createElement('canvas')
    spriteCanvas.width = 128
    spriteCanvas.height = 128
    const ctx = spriteCanvas.getContext('2d')!
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.35, 'rgba(255,220,190,0.6)')
    gradient.addColorStop(1, 'rgba(255,180,120,0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 128, 128)
    const spriteTexture = new THREE.CanvasTexture(spriteCanvas)

    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const seeds = new Float32Array(PARTICLE_COUNT)
    const speeds = new Float32Array(PARTICLE_COUNT)
    const baseX = new Float32Array(PARTICLE_COUNT)
    const baseY = new Float32Array(PARTICLE_COUNT)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 26
      const y = (Math.random() - 0.5) * 16
      const z = (Math.random() - 0.5) * 10
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      baseX[i] = x
      baseY[i] = y
      seeds[i] = Math.random() * Math.PI * 2
      speeds[i] = 0.15 + Math.random() * 0.25
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const warm = new THREE.Color('#6366f1')
    const white = new THREE.Color('#fafafa')
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const mixed = warm.clone().lerp(white, Math.random())
      colors[i * 3] = mixed.r
      colors[i * 3 + 1] = mixed.g
      colors[i * 3 + 2] = mixed.b
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.55,
      map: spriteTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const pointer = { x: 0, y: 0 }
    const targetCamPos = { x: 0, y: 0 }

    const handlePointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    const handleResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(mount)

    let rafId: number
    const clock = new THREE.Clock()

    const animate = () => {
      const t = clock.getElapsedTime()
      const posAttr = geometry.attributes.position as THREE.BufferAttribute

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const drift = Math.sin(t * speeds[i] + seeds[i]) * 0.6
        const driftY = Math.cos(t * speeds[i] * 0.8 + seeds[i]) * 0.4
        posAttr.setX(i, baseX[i] + drift)
        posAttr.setY(i, baseY[i] + driftY + t * 0.02 * (i % 2 === 0 ? 1 : -1))
      }
      posAttr.needsUpdate = true

      targetCamPos.x += (pointer.x * 1.2 - targetCamPos.x) * 0.02
      targetCamPos.y += (-pointer.y * 0.8 - targetCamPos.y) * 0.02
      camera.position.x = targetCamPos.x
      camera.position.y = targetCamPos.y
      camera.lookAt(0, 0, 0)

      points.rotation.y = Math.sin(t * 0.03) * 0.05

      renderer.render(scene, camera)
      rafId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('pointermove', handlePointerMove)
      resizeObserver.disconnect()
      geometry.dispose()
      material.dispose()
      spriteTexture.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className={className} aria-hidden="true" />
}
