import React, { useRef, useEffect , useState} from 'react'

class Player {
  constructor(ctx, x , y, radius, color, canvas){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.ctx = ctx
    this.velocity = {x : 0 , y : 0}
    this.canvas = canvas
  }

  draw (){
  
    this.ctx.fillStyle = this.color
    this.ctx.beginPath()
    // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    this.ctx.arc(this.x , this.y, this.radius, 0, Math.PI*2)
    this.ctx.fill()
  }
  update(){

    if(this.x < 90 && this.velocity.x < 1){
      this.x = this.x
    }else if(this.x > this.canvas.width - 90 && this.velocity.x > 1){
      this.x = this.x
    }else{
      this.x +=  this.velocity.x 
    }
    if(this.y < 90 && this.velocity.y < 1){
      this.y = this.y
    }else if(this.y > this.canvas.height - 90 && this.velocity.y > 1){
      this.y = this.y

    }else{
      this.y +=  this.velocity.y

    }
  }
}
class Enemy {
  constructor(ctx, x, y, radius, color, velocity) {
    this.x = x 
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
    this.ctx = ctx
  }

  draw (){
    this.ctx.fillStyle = this.color
    this.ctx.beginPath()
    // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    this.ctx.arc(this.x , this.y, this.radius, 0, Math.PI*2)
    this.ctx.fill()
  }
  
  update() {
    this.draw()
    this.x +=   this.velocity.x
    this.y +=  this.velocity.y
  }
}
const friction = 0.99
class Particle {
  constructor(ctx, x, y, radius, color, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
    this.ctx = ctx
    this.alpha = 1
  }

  draw (){
    this.ctx.save()
    this.ctx.globalAlpha = 0.5
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    this.ctx.arc(this.x , this.y, this.radius, 0, Math.PI*2)
    this.ctx.fill()
    this.ctx.restore()
  }
  
  update() {
    this.draw()
    this.velocity.x *= friction
    this.velocity.y *= friction
    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
    this.alpha -= 0.01
  }
}


class Projectile  {
  constructor(ctx, x, y, radius, color, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
    this.ctx = ctx
  }

  draw (){
    this.ctx.fillStyle = this.color
    this.ctx.beginPath()
    // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    this.ctx.arc(this.x , this.y, this.radius, 0, Math.PI*2)
    this.ctx.fill()
  }

  update() {
    this.draw()

    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
 
  }
}


const Canvas = props => {
  
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const [ play, setPlay] = useState(false)

  useEffect(() => {
    if(!play) return
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    const x = canvas.width /2
    const y = canvas.height /2
    //Our draw came here
    const player = new Player(context, x, y, 10, '#fff', canvas)

    const projectiles = []
    const enemies = []
    const particles = []
    const spawnEnemies = () => {
      setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height)

        const radius =  Math.random() * (30 -4) + 4
        let x
        let y
        if(Math.random() < 0.5){

           x= Math.random() < 0.5 ?  0 - radius : canvas.width + radius 
           y= Math.random() * canvas.height
        } else {
          x= Math.random() * canvas.width
          y=  Math.random() < 0.5 ?  0 - radius : canvas.height + radius 
        }
        const color =`hsl(${Math.random() * 360}, 50%, 50%)`

        const angle = Math.atan2( player.y - y,  player.x -x)
     
        const vel = {
          x: Math.cos(angle),
          y: Math.sin(angle)
        }
        enemies.push(new Enemy(context ,x,y,radius,color,vel))
      },1000)
    }
    spawnEnemies()
    
    const render = () => {
      frameCount++
      // spawnEnemies()
      // draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
      context.fillStyle= 'rgba(0,0,0,0.1)'
      context.fillRect(0, 0, canvas.width, canvas.height)

      player.draw()
      player.update()
        // create projectiles
      projectiles.forEach((projectile, index) => {
        projectile.update()

        if(projectiles.x + projectile.radius < 0 || 
          projectile.x - projectile.radius > canvas.width ||
          projectile.y + projectile.radius > canvas.height ||
          projectile.y - projectile.radius > canvas.height 
          
          ){
          setTimeout(() => {
            projectiles.splice(index, 1)
          }, 0)
        }
      })
            // create projectiles
      particles.forEach((particle,i) => {
        if(particle.alpha <= 0){
          particles.splice(i,1)
        }else{

          particle.update()
        }
      })
            
      enemies.forEach((enemy, iE) => {
      enemy.update()
      if(enemy.x + enemy.radius < 0 || 
        enemy.x - enemy.radius > canvas.width ||
        enemy.y + enemy.radius > canvas.height ||
        enemy.y - enemy.radius > canvas.height 
        
        ){
        setTimeout(() => {
          enemies.splice(iE, 1)
        }, 0)
      }
      const distanceBetweenPlayer = Math.hypot(player.x - enemy.x, player.y - enemy.y)
      // ON HIT
      if(distanceBetweenPlayer - enemy.radius - player.radius < 1){
   
       console.log('end game')
       window.cancelAnimationFrame(animationFrameId)
       setPlay(false)

      }
     
       projectiles.forEach((projectile,iP) => {
        const distanceBetweenEnemy = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)
        // HIT ENEMY
        if(distanceBetweenEnemy - enemy.radius - projectile.radius < 1){

          for(let i = 0; i < enemy.radius * 2; i++){
            particles.push(
              new Particle(
                context,
                projectile.x,
                projectile.y, 
                Math.random() * 2, 
                enemy.color, 
                {x: Math.random() - 0.5 * (Math.random() * 4) , y: Math.random() - 0.5 * (Math.random() * 4)}
                ))
          }

          if(enemy.radius - 10 > 5){
               // to remove flash when removing
          setTimeout(() => {
            gsap.to(enemy, {
              radius: enemy.radius - 10
            })
            projectiles.splice(iP, 1)
          })
            
          }else{
          // to remove flash when removing
          setTimeout(() => {
            enemies.splice(iE, 1)
            projectiles.splice(iP, 1)
            setScore(score => score + 1)
          }, 0)
          }
         
        }
       })}
      )
      // spawnEnemies()
    }
    render()
    // SHOOT
    window.addEventListener('click',(e) => {
      const angle = Math.atan2(e.clientY - player.y, e.clientX - player.x)
  
      const vel = {
        x: Math.cos(angle) * 4,
        y: Math.sin(angle) * 4
      }
      projectiles.push(new Projectile(
        context, player.x ,player.y , 5 ,'fff', vel
      ))
    })
    // MOVE
    window.addEventListener('keydown', (e) => {
      const {key} = e

      const press = key?.toLocaleLowerCase()
      if(press === 'w'){

        if(player.y >= 100){
        player.velocity.y -= 10 
        }else{
          player.velocity.y = 0 
        }
      }
      if(press === 's'){
        if(player.y <= canvas.height - 100){
          player.velocity.y += 10 
        }else{
          player.velocity.y = 0 
        }

      }
      if(press === 'a'){
        if(player.x >= 100){
          player.velocity.x -= 10 
        }else{
          player.velocity.x = 0 
        }

      }
      if(press === 'd'){
        if(player.x <= canvas.width - 100){

          player.velocity.x += 10 
        }else{
          player.velocity.x = 0 
        }
      }

    })
    window.addEventListener('keyup', (e) => {
      const {key} = e

      const press = key?.toLocaleLowerCase()
      if(press === 'w' || press === 's'){
        player.velocity.y = 0
      }
      if(press === 'a' || press === 'd'){
        player.velocity.x = 0 
      }
  

    })
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [play])
  
  if (typeof window !== "undefined") {
    return <div>
      <div style={{color: '#fff', position: 'fixed', top:0,left:0, userSelect:'none'}}>GAME SCORE: ${score}</div>
      {!play && 
      <div style={{
        padding: '20px',
        background:'#96bcfa',
        borderRadius: '20px',
        color: '#fff', position: 'fixed', top:'50%',left:'50%', transform:'translate(-50%,-50%)'}}>
        Play game bitch
        <div
        style={{
          margin:'20px',
          padding: '8px',
          textAlign:'center',
          background:'#fff', border:'1px solid black', borderRadius:'4px', color: '#000'}}
          onClick={() => {
            setScore(0)
            setPlay(true)}}
        >Play</div>
        </div>
        }
      <canvas ref={canvasRef} {...props} width={window?.innerWidth} height={window?.innerHeight}/>
      </div>
  }
  return null
}

export default Canvas