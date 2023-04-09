<template>
    <div class="main_div">
        <!-- From: -->
        <div class="login">
          <!-- Teahcer name -->


          <h2>Teacher Login</h2>
          <div class="login_input">
            <label for="username">Username: </label>
            <input type="text" class="form-control" id="teachername" placeholder="sliu822" autocomplete="off" v-model.trim="teachername"/>
          </div>



          <!-- Password -->
          <div class="login_input">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" placeholder="732" v-model.trim="password"/>
          </div>




          <!--button -->
          <div class="login_button">
            <button type="button"  @click="resetteahcer">Reset</button>
            <button type="button"  @click="teacherlogin">Login</button>
            <button type="button"  @click="showteacher">Hint</button>
          </div>
        </div>
    </div>
  </template>

<script>


export default {
    name: 'CaseTeacherlogin',

    data() {
        return {
            teachername: '',
            password:''
        };
    },

    mounted() {
        
    },

    methods: {
        showteacher() {
            alert("sliu822, 732")
        },
        resetteahcer() {
            this.teachername = ''
            this.password = ''
        },
        teacherlogin() {
            if (this.teachername === 'sliu822' && this.password === '732') {
                //The user is correct, store the value, and pass the token
                 localStorage.setItem('token', 'Bearer Entered correctly')
                //Go to the main page
                this.$router.push('/main_page')
      } else {
        localStorage.removeItem('token')
        if (this.teachername === 'sliu822'){
            alert("Incorrect password. Please try again!")
            this.password = ""
        }else{
            if (this.password === '732') {
            alert("Incorrect Username . Please try again!")
            this.teachername = ""
        } 
        else {
            alert("The username and password are incorrect. Please try again!")
            this.password = ""
            this.teachername = ""
        } 
        }
        
            
      }
        }
    },
};
</script>

<style lang="less" scoped>

.main_div{
    margin:0px;
    background: linear-gradient(#141e30,#5593da);
    height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
 }
 
 .login{
    padding: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	padding: 40px;
	box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
 }

 .login:hover{
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
 }

 .login > h2{ 
	color: #fff;
	margin-bottom: 30px;
}

.login .login_input { 
   
	position: relative;
	width: 100%;
}

.login .login_input input{ 
   
	outline: none;
	border: none;
	width: 100%;
	padding: 10px 0;
	margin-bottom: 30px;
    color: #fff;
	font-size: 16px;
	border-bottom: 1px solid #fff;
	background-color: transparent;
}

.login .login_input label{ 
   color: #fff;
}

.login_button button {
    position: relative;
	padding: 10px 20px;
    background-color: lightblue;
	color: white;
}

</style>