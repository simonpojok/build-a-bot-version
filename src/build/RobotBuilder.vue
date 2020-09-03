<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">
      Add to Cart
    </button>
    <div class="top-row">
      <div class="top part" :class="{ 'sale-border': selectedRobot.head.onSale }">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img  v-bind:src="selectedRobot.head.src" title="head"/>
        <button v-on:click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="selectedRobot.leftArm.src" title="left arm"/>
        <button v-on:click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="selectedRobot.torso.src" title="left arm"/>
        <button v-on:click="selectPreviousCentralPart()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextCentralPart()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="selectedRobot.rightArm.src" title="left arm"/>
        <button v-on:click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="selectedRobot.base.src" title="left arm"/>
        <button v-on:click="selectPreviousBottomPart()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextBottomPart()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(robot, index) in cart" :key="index">
              <td>{{ robot.head.title }}</td>
              <td class="cost">{{ robot.head.cost }}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import availableParts from '../data/parts';
import createdHookMixin from './created-hook-mixin';

function getPreviousValidIndex(index, length) {
  const decrementedIndex = index + 1;
  if ((decrementedIndex < 0) || (decrementedIndex >= length)) {
    return 0;
  }
  return decrementedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  if ((incrementedIndex >= length) || (incrementedIndex < 0)) {
    return 0;
  }
  return incrementedIndex;
}

export default {
  name: 'RobotBuilder',
  mixins: [createdHookMixin],
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArm: 0,
      selectedCenterPart: 0,
      selectedRightArm: 0,
      selectBottomPart: 0,
      cart: [],
    };
  },
  computed: {
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale ? '3px solid red' : '3px solid grey',
      };
    },
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.heads[this.selectedLeftArm],
        torso: availableParts.torsos[this.selectedCenterPart],
        rightArm: availableParts.heads[this.selectedRightArm],
        base: availableParts.heads[this.selectBottomPart],
      };
    },
  },
  methods: {
    selectNextHead() {
      this.selectedHeadIndex = getNextValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length,
      );
    },
    selectPreviousHead() {
      this.selectedHeadIndex = getPreviousValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length,
      );
    },
    selectPreviousLeftArm() {
      this.selectedLeftArm = getPreviousValidIndex(
        this.selectedLeftArm,
        availableParts.arms.length,
      );
    },
    selectNextLeftArm() {
      this.selectedLeftArm = getNextValidIndex(
        this.selectedLeftArm,
        availableParts.arms.length,
      );
    },
    selectPreviousCentralPart() {
      this.selectedCenterPart = getPreviousValidIndex(
        this.selectedCenterPart,
        availableParts.torsos.length,
      );
    },
    selectNextCentralPart() {
      this.selectedCenterPart = getNextValidIndex(
        this.selectedCenterPart,
        availableParts.torsos.length,
      );
    },
    selectPreviousRightArm() {
      this.selectedRightArm = getPreviousValidIndex(
        this.selectedRightArm,
        availableParts.arms.length,
      );
    },
    selectNextRightArm() {
      this.selectedRightArm = getNextValidIndex(
        this.selectedRightArm,
        availableParts.arms.length,
      );
    },
    selectPreviousBottomPart() {
      this.selectBottomPart = getPreviousValidIndex(
        this.selectBottomPart,
        availableParts.bases.length,
      );
    },
    selectNextBottomPart() {
      this.selectBottomPart = getNextValidIndex(
        this.selectBottomPart,
        availableParts.bases.length,
      );
    },
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost
      + robot.leftArm.cost
      + robot.rightArm.cost
      + robot.torso.cost
      + robot.base.cost;
      this.cart.push({ ...robot, cost });
    },
  },
};
</script>
<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  font-size: 16px;
}
td, th {
  text-align: left;
  padding: 5px 20px 5px 5px;
}
.cost {
  text-align: right;
}
.sale-border {
  border: 3px solid red;
}
</style>
