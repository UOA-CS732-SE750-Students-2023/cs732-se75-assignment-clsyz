<template>
  <div class="main_div">
  <div class="outline">
    <h1>Vue third</h1>
    <P>1. Dynamic components</P>
    <P>2. Slot</P>
    <P>3. Custom instruction</P>
  </div>
  <hr>


  <div class="Dynamic_components">
    <h1>Part 1:</h1>
    <h2>Dynamic components</h2>
    <button @click="changecomponent">Changecomponent</button>
    <div class="Dy">
      <!-- keep-alive ensures that components are not destroyed-->
    <keep-alive>
      <!--Dynamically rendering components-->
    <component :is="componentName"></component>
    </keep-alive>
    </div>
  </div>
  <hr>


  <div class="slot">
    <h1>Part 2:</h1>
    <h2>Slot:</h2>
    <slot_learn>
      <!--By default, anything that needs to be filled when using a component is filled into the default field named "default".-->
      <p>This is the "P" tag displayed using slots in App.vue.</p>
      <template v-slot:slot1>
        <p>Insert p tags into slots with fixed names.</p>
      </template>
      <template #slot2>
        <!--logogram-->
        <P>v-slot: -> #</P>
      </template>
      <template #slot3></template>
      <template #slot4 = "scope">
        <p>{{scope.content}}</p>
      </template>
    </slot_learn>
  </div>
  <hr>



  <div class="custom_instruction">
    <h1>Part 3:</h1>
    <h2>Custom instruction:</h2>

    <hr>
    <p>Use update function and Function shorthand:</p>
    <!--Use the update function, which is called every time the DOM is updated-->
    <p v-ChangeColor=" changecolor">Please enter a color: {{changecolor}}, The colors entered in the fields below will be rendered to this P labels.</p>
    <input type="text" v-model.lazy="changecolor">
    <hr>
    <p v-color>This p tag modifies the color with a custom directive!</p>
    <hr>
    <P>Use binding to send value:</P>
    <p v-bColor = "bcolor">The bind function in v-color</p>
    <hr>
    <p v-wholecolor = "Wcolor">Global custom directives:</p>
    <button @click="Wcolor = 'purple'">Change color</button>

  </div>
  </div>
</template>

<script>
import Dy_components1 from './components/Dy_components1.vue';
import Dy_components2 from './components/Dy_components2.vue';
import slot_learn from '@/components/slot.vue'

export default {

    data() {
      return {
        //The name of the component to display
        componentName: 'Dy_components1',
        number: 1,
        bcolor: 'blue',
        changecolor: 'yellow',
        Wcolor: 'green'
      }
    },
    components: {
        Dy_components1,
        Dy_components2,
        slot_learn
    },

    methods: {
      changecomponent() {
        if (this.number % 2 == 0){
          this.componentName = 'Dy_components1';
        }
        else{
          this.componentName = 'Dy_components2';
        }
        console.log(this.number)
        this.number = this.number + 1
      }
    },

    //Declaration of private instructions
    directives: {
      //Customize the instruction name
      color: {
        //Fixed notation
        //The el element in the parameter represents the DOM element to which the instruction is bound.
        bind(el) {
          el.style.color= 'greenyellow'
        }
      },

      bColor: {
        bind(el, binding) {
          el.style.color = binding.value
        }
      },
      
      //Customize the instruction name
      /*
      ChangeColor: {
        bind(el, binding) {
          el.style.color = binding.value
        },
        //The update function
        update(el, binding) {
          el.style.color = binding.value
        }
      },*/
      //Function shorthand:
      ChangeColor(el, binding) {
        el.style.color = binding.value
      }
},
}
</script>

<style lang="less">
.outline{
  margin: 3px;
  color: red;
  background-color: rgb(196, 194, 194);
  border: 2px solid black;
  padding-left: 10px;
}

.Dynamic_components{
  margin: 3px;
  background-color: rgb(196, 194, 194);
  border: 2px solid black;
  padding-left: 10px;
}
.Dy {
  display:flex;
}
.slot{
  margin: 3px;
  background-color: rgb(196, 194, 194);
  border: 2px solid black;
  padding-left: 10px;
}

.custom_instruction {
  margin: 3px;
  background-color: rgb(196, 194, 194);
  border: 2px solid black;
  padding-left: 10px;
}

</style>
