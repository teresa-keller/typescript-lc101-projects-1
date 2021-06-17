import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapicityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapicityKg;
    }

    sumMass ( items: Payload[] ): number {
        let totalMass = 0;
        for (let i = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        return totalMass;
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts); 
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}