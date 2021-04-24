<template>
  <div class="animation">
    <h3>Animation</h3>
    <button @click="toggleModal">Open Modal</button>
    <transition name="fade">
      <div class="modal" v-if="isOpen">
        <h5 class="">Modal</h5>
        <div class="d-flex justify-around">
          <input type="text" v-model="item" />
          <button @click="addItem">Add</button>
          <button @click="sortItems">Sort</button>
        </div>
        <transition-group tag="ul" name="slide-up" appear>
          <li v-for="item in listItem" :key="item">
            {{ item }}
          </li>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      listItem: ["cat", "dog", "chicken"],
      item: null,
    };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    addItem() {
      if (this.item) {
        this.listItem.push(this.item);
        this.item = null;
      }
    },
    sortItems() {
      this.listItem.sort();
    },
  },
};
</script>

<style scoped>
.animation {
  position: relative;
}
.modal {
  height: 300px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: rgba(1, 1, 1, 0.1);
  margin: 10px auto 0 auto;
  padding-top: 10px;
}

ul li {
  text-align: left;
}
</style>
