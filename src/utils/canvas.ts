export const zr_0 = () => {
  const c = document.getElementById('zr_0') as any
  c.style.width = '120'
  c.style.height = '100'
  c.style.top = '-15'
  const ctx = c.getContext("2d")
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 2
  ctx.moveTo(0, 45)
  ctx.lineTo(25, 15)
  ctx.lineTo(55, 18)
  ctx.lineTo(80, 50)
  ctx.lineTo(100, 45)
  ctx.lineTo(120, 0)
  ctx.stroke()
}

export const zr_1 = () => {
  const c = document.getElementById('zr_1') as any
  c.style.width = '140'
  c.style.height = '100'
  c.style.top = '-15'
  const ctx = c.getContext("2d")
  ctx.fillStyle = 'rgba(37, 99, 235,1)'
  ctx.fillRect(10, 50, 10, -20)
  ctx.fillRect(30, 50, 10, -30)
  ctx.fillRect(50, 50, 10, -40)
  ctx.fillRect(70, 50, 10, -30)
  ctx.fillRect(90, 50, 10, -20)
}