var sh = require('shared');
Object.assign(StructureTower.prototype, {
    run: function() {
        this.tryRepair();
        // var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        // if(closestHostile) {
        //     tower.attack(closestHostile);
        // }
    },
    tryRepair: function() {
        if(Memory.towers[this.id] == null) {
            Memory.towers[this.id] = {};
        }
        this.doRepair(this.pos, Memory.towers[this.id], function(target) {
            this.repair(target);
        });
    },
    doRepair: sh.doRepair
});
