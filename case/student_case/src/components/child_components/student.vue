<template>
    <div class="v-for">
        <form @submit.prevent="addstudent">
        <table class="add add-bordered add-hover add-striped ">
        <thead>
          <th>Add Name</th>
          <th>Add Gender</th>
          <th>Add Age</th>
          <th>Submit</th>
        </thead>
        <tbody>
          <td><input type="text" v-model.trim="newname"></td>
          <td><input type="text" v-model.trim="newgender"></td>
          <td><input type="text" v-model.trim="newage"></td>
          <td><button type="submit">Submit</button></td>
        </tbody>
        </table>
      </form>
    
    <hr>
    <table class="list list-bordered list-hover list-striped">
      <thead>
        <th>Number</th>
        <th>Id</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Present</th>
        <th>Delete</th>
      </thead>
      <tbody>
        <!-- 1. Whenever the v-for directive is used, always bind a :key property. -->
        <!-- 2. Try to use the id as the key value. -->
        <!-- 3. The official value type of the key is a string or a number. -->
        <!-- 4. You should never try to duplicate the value of the key, or you will get a Duplicate keys detected error -->
        <tr v-for="(student, index) in studentlist" :key="student.id" :title="student.name">
          <td>{{ index }}</td>
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.gender }}</td>
          <td>
            <div>
              <!-- Two-Way data binding with v-model -->
              <input type="checkbox" :id="student.id" v-model="student.status">
              <!-- Use v-if in conjunction with v-else for on-demand rendering -->
              <label :for="student.id" v-if="student.present">Present</label>
              <label :for="studentid" v-else>Absent</label>
            </div>
          </td>
          <td><a href="javascript:alert('Deleted')" @click="deletestudent(student.id)">Delete</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

    data() {
        return {
        Id: 5,
        newname: '',
        newgender: '',
        newage: '',
        studentlist: [
          { id: 1, name: 'LSZ', gender:'male', age:'22', present:true},
          { id: 2, name: 'CLY', gender:'female', age:'21',present:true },
          { id: 3, name: 'CLSYZ', gender:'female', age:'20',present:true },
          { id: 4, name: 'Sliu', gender:'male', age:'23',present:true },
          { id: 5, name: 'Shengzhe Liu', gender:'male', age:'22',present:true}
        ]
        }
      },

      methods: {
        addstudent() {
          this.Id += 1
          const newstudent = {
            id: this.Id,
            name: this.newname,
            gender: this.newgender,
            age: this.newage,
            present:true,
          }
          alert('Added successfully')

          this.studentlist.push(newstudent)
          this.newid= ''
          this.newname= ''
          this.newgender= ''
          this.newage= ''

        },

      deletestudent(Id) {
        this.studentlist = this.studentlist.filter(student => student.id !== Id)
      }
      },

};
</script>

<style lang="less" scoped>
  .outline{
            background-color: rgb(148, 204, 253);
            border: 2px solid lightblue;
            padding-left: 5px;
        }
  .list, .add {
  width: 100%;
  color: black;
}
.list th, .list td, .add th, .add td{
  padding: 10px;
  vertical-align: top;
  border-top: 1px solid lightgray;
}
.list thead th, .add thead th {
  vertical-align: bottom;
  border-bottom: 2px solid lightgray;
}
.list-bordered, .add-bordered {
  border: 1px solid lightgray;
}
.list-bordered th, .list-bordered td,
.add-bordered th, .add-bordered td{
  border: 1px solid lightgray;
}
.list-bordered thead th, .list-bordered thead td ,
.add-bordered thead th, .add-bordered thead td {
  border-bottom-width: 2px;
}


</style>