<template>
    <div class="bootstrap-container">
        <Header />
        <div class="bootstrap-view">
                <h1 class="text-left text-dark">Subject</h1>
                <div class="row mt-4 ">
                    <div class="col-6">
                        <div class="card shadow mb-2">
                            <div class="cardheader1">
                                <h2 class="number1 p-3">01</h2>
                            </div>
                            <div class="card-body text-left">
                                <h1>Math</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card shadow mb-2">
                            <div class="cardheader2">
                                <h2 class="number2 p-3">02</h2>
                            </div>
                            <div class="card-body text-left">
                                <h1>Science</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 ">
                    <div class="col-6">
                        <div class="card shadow mb-2">
                            <div class="cardheader3">
                                <h2 class="number3 p-3">03</h2>
                            </div>
                            <div class="card-body text-left">
                                <h1>Social Science</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card shadow mb-2">
                            <div class="cardheader4">
                                <h2 class="number4 p-3">04</h2>
                            </div>
                            <div class="card-body text-left">
                                <h1>English</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 ">
                    <div class="col-6">
                        <div class="card shadow mb-2">
                            <div class="cardheader5">
                                <h2 class="number5 p-3">05</h2>
                            </div>
                            <div class="card-body text-left">
                                <h1>Hindi</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card shadow mb-2">
                            <div class="cardheader6">
                                <h2 class="number6 p-3">06</h2>
                            </div>
                            <div class="card-body text-left">
                                <h1>Sanskrit</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      <Footer active="settings" />
    </div>
</template>
<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
    name: "Settings",
    data: () => ({}),
    components: {
        Header,
        Footer
    }
};
</script>
<style scoped="">
.bootstrap-view {
    margin-top: 56px;
    height: calc(100vh - 112px);
    margin-bottom: 56px !important;
    overflow: auto;
}


body{
  margin:0;
  padding:0;
}
.card{
border-radius: 15px;
}
.cardheader1{
  height: 220px;
  background-color:#80f99b;
  border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.cardheader2{
  height: 220px;
  background-color:#ffbb9ed1;
  border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.cardheader3{
  height: 220px;
  background-color:#f5fb68;
  border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.cardheader4{
  height: 220px;
  background-color:#c48afb;
  border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.cardheader5{
  height: 220px;
  background-color:#88f8fb;
  border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.cardheader6{
  height: 220px;
  background-color:#fbdb99;
  border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.number1{
  bottom: 0;
    background: #4af990;
    position: absolute;
    margin-bottom: 96px;
    font-size: 58px;
    width: 128px;
    border-top-right-radius: 15px;
}
.number2{
  bottom: 0;
    background: #f9b497d1;
    position: absolute;
    margin-bottom: 96px;
    width: 128px;
    border-top-right-radius: 15px;
}
.number3{
  bottom: 0;
    background: #f3ed31a1;
    position: absolute;
    margin-bottom: 96px;
    width: 128px;
    border-top-right-radius: 15px;
}
.number4{
  bottom: 0;
    background: #cb73f7;
    position: absolute;
    margin-bottom: 96px;
    width: 128px;
    border-top-right-radius: 15px;
}
.number5{
  bottom: 0;
    background: #51f5f5;
    position: absolute;
    margin-bottom: 96px;
    width: 128px;
    border-top-right-radius: 15px;
}

.number6{
  bottom: 0;
    background: #efce7d;
    position: absolute;
    margin-bottom: 96px;
    width: 128px;
    border-top-right-radius: 15px;
}
</style>