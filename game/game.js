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
  constructor(ctx, x , y, radius, color, canvas, currentPower, image){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.ctx = ctx
    this.velocity = {x : 0 , y : 0}
    this.canvas = canvas
    this.level = 1
    this.powerUp = currentPower ?? PowerUp.regular
    this.image = image
    this.h = 35
    this.w = 80
    this.rotation = 0;
    this.angle = 1
  }

  draw (){
    this.ctx.save();
   
    // this.ctx.beginPath()
//     // // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
//     // this.ctx.arc(this.x , this.y, 50, 20, Math.PI*2)
//     this.ctx.fill()

this.ctx.translate(this.x, this.y);
this.ctx.rotate(this.angle );
// console.log('this.angle * Math.PI/360', this.angle * Math.PI/360)
// this.ctx.fillStyle = 'red'
// this.ctx.fillRect(-40,-16, 80 ,35)
// this.ctx.rotate(0 * Math.PI / 180);
// this.ctx.restore()
// this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
// this.ctx.save();
// this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
// this.ctx.translate(50,  50)
// this.ctx.rotate(this.rotation);
    // this.ctx.rect(this.x, this.y, 35,80)
  
this.ctx.drawImage(this.image, 0-this.w/2, 0-this.h/2);
this.ctx.restore();

  }

  rotate(e) {
   
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const r  = Math.atan2(y -  this.y ,x - this.x);
      this.rotation = r 
      this.angle = r 
      this.draw();
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

function RectCircleColliding(circle,rect){

  var distX = Math.abs(circle.x - rect.x-rect.w/2);
  var distY = Math.abs(circle.y - rect.y-rect.h/2);

  if (distX > (rect.w/2 + circle.radius)) { return false; }
  if (distY > (rect.h/2 + circle.radius)) { return false; }

  if (distX <= (rect.w/2)) { return true; } 
  if (distY <= (rect.h/2)) { return true; }

  var dx=distX-rect.w/2;
  var dy=distY-rect.h/2;
  return (dx*dx+dy*dy<=(circle.radius*circle.radius));
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}
function detectCollision(rectX, rectY, rectWidth, rectHeight, rectAngle, circleX, circleY, circleRadius) {
  // calculate the four axes of the rectangle
  // var angleOfRad = degToRad(-deg)
  let cx
  let cy
  var rectCenterX = rectX + rectWidth / 2
  var rectCenterY = rectY + rectWidth / 2

  var rotateCircleX = Math.cos(rectAngle) * (circleX - rectCenterX) - Math.sin(rectAngle) * (circleY - rectCenterY) + rectCenterX
  var rotateCircleY = Math.sin(rectAngle) * (circleX - rectCenterX) + Math.cos(rectAngle) * (circleY - rectCenterY) + rectCenterY

	if (rotateCircleX < rectX) {
    cx = rectX
  } else if (rotateCircleX > rectX + rectWidth) {
    cx = rectX+ rectWidth
  } else {
    cx = rotateCircleX
  }

  if (rotateCircleY < rectY) {
    cy = rectY
  } else if (rotateCircleY > rectY + rectHeight) {
    cy = rectY + rectHeight
  } else {
    cy = rotateCircleY
  }

  if (distance(rotateCircleX, rotateCircleY, cx, cy) < circleRadius) {
    console.log('COLLISION!!!')
    return true
  }

  return false

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
    const image = new Image();
    image.onload = function(res) {
      console.log("res", res);
      // context.drawImage(image, 0, 0);
    };
    image.onerror = function(err) {
      console.log("err", err);
    };
    image.src = "/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F191632%2F84x37%2Fa3ad2ceb1c%2Fbombr.png%2Fm%2F84x0%2Ffilters%3Aquality(75)&w=256&q=75";
    
    //Our draw came here
    const player = new Player(context, x, y, 10, '#fff', canvas, currentPower, image)

    const projectiles = []
    const enemies = []
    const particles = []
    const powerUps = []
    let powerShots = 0
    let time = 0
    const spawnEnemies = () => {
      setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height)
        const makeEnemy = () => {

          let level = player.level > 1 ? Math.random() * 40:0
        
          if(player.level > 10 ){
            level = Math.random() * 60
          }
          
          const radius =  Math.random() * (30 -4) + 4 + level
          
          let x
          let y
          if(Math.random() < 0.5){
            
            x= Math.random() < 0.5 ?  0 - radius : canvas.width + radius
            y= Math.random() * canvas.height + radius  
          } else {
            x= Math.random() * canvas.width + radius  
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
            multiplier = Math.random() > 0.5 ? 3 : 1
            
          }
          return {
            x,
            y,
            radius,
            color,
            vel,
            multiplier
          }
        }
    
        const e = makeEnemy()
        enemies.push(new Enemy(context ,e.x,e.y,e.radius,e.color,e.vel, e.multiplier))
        if(player.level > 5){
       
          const e2 = makeEnemy()
          enemies.push(new Enemy(context ,e2.x,e2.y,e2.radius,e2.color,e2.vel, e2.multiplier))
        }
        if(player.level > 20){
     
          const e2 = makeEnemy()
          enemies.push(new Enemy(context ,e2.x,e2.y,e2.radius,e2.color,e2.vel, e2.multiplier))
        }
     
  
      },1000)
    }
    spawnEnemies()
  

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
        // const colliding = RectCircleColliding(powerUp, player)
        detectCollision
        const colliding = detectCollision(player.x, player.y, player.w, player.h, player.angle, powerUp.x, powerUp.y,15)

      
        if(colliding){
          console.log('power collided')
   
         player.power=powerUp.power
         currentPower = powerUp.power
         powerShots = 0
         setPower(powerUp.power)
         
  
        }
      })
      
      enemies.forEach((enemy, iE) => {
      enemy.update()
   
      if(enemy.x + enemy.radius < 0 || 
        enemy.x - enemy.radius > canvas.width ||
        enemy.y + enemy.radius < 0 ||
        enemy.y - enemy.radius > canvas.height 
        ){
          if( enemy.x + enemy.radius >= canvas.width -150  || enemy.x - enemy.radius <= 90 + enemy.radius + 50){
        
            enemy.velocity.x = -enemy.velocity.x;
          }
   
          if( enemy.y + enemy.radius >= canvas.height + enemy.radius  + 50|| enemy.y + enemy.radius <= 0  ){
            enemy.velocity.y = -enemy.velocity.y;
          }
        // setTimeout(() => {
        //   enemies.splice(iE, 1)
        // }, 0)
      }
      const distanceBetweenPlayer = Math.hypot(player.x - enemy.x, player.y - enemy.y)
      // ON HIT
     
    // const colliding = RectCircleColliding(enemy, player)
    const colliding = detectCollision(player.x, player.y, player.w, player.h, player.angle, enemy.x, enemy.y, enemy.radius)
    
      if(colliding){
        // console.log(colliding)
   
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
    const shoot = (e) =>{
      const angle = Math.atan2(e.clientY - player.y, e.clientX - player.x)
      powerShots++
      if(powerShots >= 40){
        currentPower = PowerUp.regular
        setPower(PowerUp.regular)
      }
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
        context, player.x ,player.y , 5 ,'white', vel
      ))
      if(currentPower.loop === 2){
        projectiles.push(new Projectile(
          context, player.x ,player.y , 5 ,'white', velFast
        ))
      }
      if(currentPower.loop === 3){
        projectiles.push(new Projectile(
          context, player.x ,player.y , 5 ,'white', vel2
          ))
        projectiles.push(new Projectile(
          context, player.x ,player.y , 5 ,'white', vel3
          ))
      }}
    var mousedownID = -1
    var shooting = false
    window.addEventListener('mousedown',(e) => {
      if(mousedownID==-1)  //Prevent multimple loops!
      shooting = true
      mousedownID = setInterval( () => shoot(e), 300 /*execute every 100ms*/);
      
    })

    let rotation = 0;
    window.addEventListener('mousemove',(e) => {
      clearInterval(mousedownID);
      mousedownID=-1;
      
      if(shooting){
        // shoot(e)
        mousedownID = setInterval( () => shoot(e), 300 /*execute every 100ms*/);
      }  //Prevent multimple loops!

   
      player.rotate(e)
    })
    if(!play){
      console.log('end game done')
    }
    window.addEventListener('mouseup',(e) => {
      
      clearInterval(mousedownID);
      shooting = false
      mousedownID=-1;
    })
    // MOVE
    window.addEventListener('keydown', (e) => {
  
      const {key} = e

      const press = key?.toLocaleLowerCase()
      if(press === 'w'){

        if(player.y >= 10){
        player.velocity.y -= 10 
        }else{
          player.velocity.y = 0 
        }
      }
      if(press === 's'){
        if(player.y <= canvas.height - 10){
          player.velocity.y += 10 
        }else{
          player.velocity.y = 0 
        }

      }
      if(press === 'a'){
        if(player.x >= 10){
          player.velocity.x -= 10 
        }else{
          player.velocity.x = 0 
        }

      }
      if(press === 'd'){
        if(player.x <= canvas.width - 10){

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
  // useEffect(() =>{
  //   console.log('power rerended', power)
  //   if(power && power?.name !== [power?.name]){
  //     setShowPower(true)
  //     setTimeout(() => {
  //       setShowPower(false)
  //     },500)
  //   }
   
  // },[power])

  useEffect(() =>{

    if(power && power?.name !== [power?.name]){
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