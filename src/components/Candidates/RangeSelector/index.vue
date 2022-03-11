<template>
  <div style="position: relative; margin: 0">
    <div
      style="
        min-height: 10px;
        background-color: #fff;
        border-radius: 5px;
        position: absolute;
        top: 15px;
        width: 100%;
      "
    ></div>
    <div
      style="
        min-height: 10px;
        background-color: #d6000e;
        border-radius: 5px;
        position: absolute;
        top: 15px;
      "
      :style="{width: selected === 10 ? '100%' : (selected * 10 - 5) + '%' }"
    ></div>

    <div
      style="
        display: flex;
        justify-content: space-around;
        position: absolute;
        width: 100%;
      "
    >
      <button
        v-for="i in 10"
        :key="i"
        style="
          margin: 0 10px;
          border-radius: 50%;
          height: 40px;
          width: 40px;
          border: none;
          color: white;
          font-weight: bold;
        "
        type="button"
        :style="{
            backgroundColor: i <= selected ? '#d6000e' : '#fff',
            color: i <= selected ? '#fff' : '#d6000e'}"
        @click="onSelectValue( i )"
        :disabled="disabled"
      >
        {{ i }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SelectExperience',
    props: {
        value: {
            type: Number,
            default: 0
        },
        disabled: {
          type: Boolean,
          default: false
        }
    },
    data() {
        return {
            selected: 0
        }
    },
    computed: {
    },
    created() {
      this.selected = this.$props.value
    },
    methods: {
        onSelectValue(index) {
            this.selected = index
            this.$emit('experienceSelected', index)
        }
    }
}
</script>