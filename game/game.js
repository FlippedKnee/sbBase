import React, { useRef, useEffect , useState} from 'react'
import * as styled from './game.styled.tsx'

const PowerUp = {
  regular:{
    name:'Regular',
    loop: 1,
    damage: 10,
    speed: 1,
    bonus: 1,
  },
  tripple: {
    name:'Tripple Fire',
    loop: 3,
    damage: 10,
    speed: 1,
    bonus: 1,
    color: 'red'
  },
  superFast:{
    name: 'Charged',
    loop: 2,
    damage: 10,
    speed: 5,
    bonus: 1,
    color: 'blue'
  },
  highDamage: {
    name: 'Tripple Damage',
    loop: 1,
    damage: 30,
    speed: 1,
    bonus: 1,
    color: 'orange'
  },
  doubleBonus: {
    name: 'Double Bonus',
    loop: 1,
    damage: 10,
    speed: 1,
    bonus: 2,
    color: 'yellow'
  },
  trippleBonus: {
    name: 'Tripple Bonus',
    loop: 1,
    begin: 0,
    damage: 10,
    speed: 1,
    bonus: 3,
    color: 'gold'
  }
}

const powerArr = [ PowerUp.superFast, PowerUp.trippleBonus, PowerUp.doubleBonus, PowerUp.highDamage, PowerUp.tripple]

class Player {
  constructor(ctx, x , y, radius, color, canvas, currentPower){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.ctx = ctx
    this.velocity = {x : 0 , y : 0}
    this.canvas = canvas
    this.level = 1
    this.powerUp = currentPower ?? PowerUp.regular
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
  constructor(ctx, x, y, radius, color, velocity, multiplier) {
    this.x = x 
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
    this.ctx = ctx
    this.multiplier = multiplier
  }

  draw (){
    this.ctx.fillStyle = this.color
    this.ctx.beginPath()
    // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    this.ctx.arc(this.x , this.y, Math.abs(this.radius), 0, Math.PI*2)
    this.ctx.fill()
  }
  
  update() {
    this.draw()
    this.x +=   this.velocity.x * this.multiplier
    this.y +=  this.velocity.y * this.multiplier
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


// const powerups

class Power  {
  constructor(ctx, x, y, color, velocity, multiplier, power) {
    this.x = x 
    this.y = y
    this.color = color
    this.velocity = velocity
    this.ctx = ctx
    this.multiplier = multiplier
    this.radius = 40
    this.power = power
  }

  draw (){
    this.ctx.fillStyle = this.color
    this.ctx.beginPath()
    this.ctx.font = "20px Georgia";
// ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    this.ctx.rect(this.x , this.y, 40, 40)
    this.ctx.fillText("P", 5, 5);
    this.ctx.fill()
  }
  
  update() {
    this.draw()
    this.x +=   this.velocity.x * this.multiplier
    this.y +=  this.velocity.y * this.multiplier
  }
}


const Canvas = props => {
  
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const [power, setPower] = useState(PowerUp.regular)
  const [showPower, setShowPower] = useState(false)
  const [ play, setPlay] = useState(false)

  useEffect(() => {
    if(!play) return
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    const x = canvas.width /2
    const y = canvas.height /2
    let level = 1
    let currentPower = PowerUp.regular
    //Our draw came here
    const player = new Player(context, x, y, 10, '#fff', canvas, currentPower)

    const projectiles = []
    const enemies = []
    const particles = []
    const powerUps = []
    const timer = 1000 - 100 * player.level
    const spawnEnemies = (level) => {
      setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height)
        let level = player.level > 1 ? Math.random() * 40:0
        if(player.level > 10 ){
          level = Math.random() * 60
        }
 
        const radius =  Math.random() * (30 -4) + 4 + level
 
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
        let multiplier = 1
        if(player.level > 10 ){
          multiplier = Math.random() > 0.5 ? 5 : 1

        }
        enemies.push(new Enemy(context ,x,y,radius,color,vel, multiplier))
      },1000)
    }
    spawnEnemies()
    if(player.level > 10){
      if(Math.random() > 0.5){
        spawnEnemies()
      }
    }
    if(player.level > 20){
      spawnEnemies()
    }

    // spawn power up

    const spawnPowerUp = (level) => {
      setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height)
        let level = player.level > 1 ? Math.random() * 40:0
        if(player.level > 10 ){
          level = Math.random() * 60
        }
 
        const radius =  Math.random() * (30 -4) + 4 + level
 
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

        const angle = Math.atan2( canvas.height/2- y,  canvas.width/2 -x)
     
        const vel = {
          x: Math.cos(angle),
          y: Math.sin(angle)
        }
        let multiplier = 1
        if(player.level > 10 ){
          multiplier = Math.random() > 0.5 ? 5 : 1

        }
        const randomIndex = Math.floor(Math.random() * powerArr.length);

        const power = powerArr[randomIndex]
       
        powerUps.push(new Power(context ,x,y,power.color,vel, multiplier,power))
      },5000)
    }
    spawnPowerUp()
    if(player.level > 20){
      spawnPowerUp()
    }
    
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

      powerUps.forEach((powerUp, powerIndex) => {
        powerUp.update()
        if(powerUp.x + powerUp.radius < 0 || 
          powerUp.x - powerUp.radius > canvas.width ||
          powerUp.y + powerUp.radius > canvas.height ||
          powerUp.y - powerUp.radius > canvas.height 
          
          ){
          setTimeout(() => {
            powerUps.splice(powerIndex, 1)
          }, 0)
        }
        const distanceBetweenPlayer = Math.hypot(player.x - powerUp.x, player.y - powerUp.y)
        // ON HIT
        if(distanceBetweenPlayer - powerUp.radius - player.radius < 1){
     
   
         player.power=powerUp.power
         currentPower = powerUp.power
         setPower(powerUp.power)
         
  
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
       player.level=1
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

          if(enemy.radius - currentPower.damage > 5){
               // to remove flash when removing
          setTimeout(() => {
            gsap.to(enemy, {
              radius: enemy.radius - currentPower.damage
            })
            projectiles.splice(iP, 1)
          })
            
          }else{
          // to remove flash when removing
          setTimeout(() => {
            enemies.splice(iE, 1)
            projectiles.splice(iP, 1)
            setScore(score => score + 1 * currentPower.bonus)
            player.level += 1
         
          }, 0)
          }
         
        }
       })}
      )
      
    }
    render()
    // SHOOT
    window.addEventListener('click',(e) => {
      const angle = Math.atan2(e.clientY - player.y, e.clientX - player.x)

      const vel = {
        x: Math.cos(angle) * 4 ,
        y: Math.sin(angle) * 4  
      }
      const velFast = {
        x: Math.cos(angle) * 4 * currentPower?.speed,
        y: Math.sin(angle) * 4 * currentPower?.speed
      }
      const vel2 = {
        x: Math.cos(angle + 0.2) * 4,
        y: Math.sin(angle + 0.2) * 4
      }
      const vel3 = {
        x: Math.cos(angle - 0.2) * 4,
        y: Math.sin(angle - 0.2) * 4
      }
      projectiles.push(new Projectile(
        context, player.x ,player.y , 5 ,'fff', vel
      ))
      if(currentPower.loop === 2){
        projectiles.push(new Projectile(
          context, player.x ,player.y , 5 ,'fff', velFast
        ))
      }
      if(currentPower.loop === 3){
        projectiles.push(new Projectile(
          context, player.x ,player.y , 5 ,'fff', vel2
          ))
        projectiles.push(new Projectile(
          context, player.x ,player.y , 5 ,'fff', vel3
          ))
      }
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
  useEffect(() =>{
    if(power){
      setShowPower(true)
    }
    setTimeout(() => {
      setShowPower(false)
    },500)
  },[power])
  if (typeof window !== "undefined") {
    return <div>
      <div style={{color: '#fff', position: 'fixed', top:0,left:0, userSelect:'none'}}> GAME SCORE: ${score} power: {power.name}</div>
      {showPower &&
      <styled.Power power={showPower}>{power?.name}</styled.Power>
      }
        
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