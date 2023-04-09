<template>
    <div class="dis_main">
        <div class="discussion">
            <h2>Add Discussion: </h2>
            <div class='form'>
                <div class='form-row'>
                    <label>Title:</label>
                    <input type="text" v-model.trim="Title"/>
                </div>

                <div class='form-row'>
                    <label>Content:</label>
                    <textarea rows={10} v-model.trim="Content"/>
                </div>

                <div class='form-button'>
                    <button @click="addDis">
                        Add
                    </button>
                </div>
            </div>
        </div>
    <div class="discussion" v-for="(dis) in dislist" :key="dis.id" :title="dis.title">
        <h2>{{dis.title}}</h2>
        <p>{{ dis.content }}</p>
    </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            Title:'',
            Content: '',
            Id: 5,
        dislist: [
          { id: 1, title: 'title1', content:'Discussion1'},
          { id: 2, title: 'title2', content:'Discussion2'},
          { id: 3, title: 'title3', content:'Discussion3'},
          { id: 4, title: 'title4', content:'Discussion4'},
          { id: 5, title: 'title5', content:'Discussion5'}
        ]
            
        };
    },

    mounted() {
        
    },

    methods: {
        addDis() {
            this.Id += 1
            const newdis = {
            id: this.Id,
            title: this.Title,
            content: this.Content,
          }
          alert('Added successfully')

          this.dislist.push(newdis)
          this.Title= ''
          this.Content= ''
        }
    },
};
</script>

<style lang="less" scoped>
.discussion {
    flex-basis: 100%;
    flex-grow: 1;
    text-align: justify;
    background-color: whitesmoke;
    padding: 1px 30px;
    margin: 5px;
    box-shadow: 3px 3px 3px darkgray;
    box-sizing: border-box;
    border: 1px solid transparent;
}
  
.discussion:hover {
    border: 1px solid rgb(22, 22, 22);
}
.dis_main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.add-article {
    flex-basis: 40%;
    flex-grow: 1;
    text-align: justify;
    background-color: white;
    padding: 1px 30px;
    margin: 5px;
    box-shadow: 3px 3px 3px darkgray;
    box-sizing: border-box;
    border: 1px solid transparent;
  }  
  .form .form-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  
  .form .form-row > * {
    flex-grow: 1;
  }
  
  .form .form-row > label {
    text-align: right;
    margin-right: 10px;
    flex-basis: 100px;
    flex-grow: 0;
  }
 .form-button {
    display: block;
   text-align: center;
   height: 50px;
 }
</style>