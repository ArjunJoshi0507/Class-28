class Slingshot{
    constructor(bodyA, ptB){
        var options = {
            bodyA: bodyA,
            pointB: ptB,
            stiffness: 0.04,
            length: 10
        }
        //this.pointB = ptB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        console.log(this.chain)
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly(){
        this.chain.bodyA = null;
    }
}