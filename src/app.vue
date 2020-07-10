<template lang="html">
    <div class="message">
       <div class="text-right mb-3 mt-3">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" v-on:click="openModal('false')">
                      建立新資料</button>
                      </div>
            <!-- Modal -->
       <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-info" id="exampleModalLabel">建立新資料</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                           </button>
                        </div>
             <div class="modal-body">
                  <div class="row">
                        <div class="col-4">
                          <div class="form-group">
                            <label for="imageUrl"class="text-info">輸入圖片網址</label>
                            <!-- //v-model=imageUrl -->
                            <input type="text"id="imageUrl"v-model="tempData.imageUrl"class="form-control"placeholder="請輸入圖片連結">
                          </div>
                          <img class="img-fluid">
                        </div>   
                        <!-- //col-4 -->
                    <div class="col-8">
                      <div class="form-group">
                        <label for="title"class="text-info">標題</label>
                        <!-- //v-model=title -->
                        <input type="text"id="title"v-model="tempData.title"class="form-control"placeholder="請輸入標題">
                        </div>
                   
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="category"class="text-info">分類</label>
                          <!-- //v-model=categroy-->
                          <input id="category"type="text" v-model="tempData.category"class="form-control"placeholder="請輸入分類">
                        </div>
                        <div class="form-group col-md-6">
                          <label for="price"class="text-info">單位</label>
                          <!-- //v-model=unit-->
                          <input id="unit"type="text" v-model="tempData.unit"class="form-control"placeholder="請輸入單位">
                        </div>
                      </div>
                       <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="origin_price"class="text-info">原價</label>
                          <!-- //v-model=origin_price-->
                          <input id="origin_price"type="text" v-model="tempData.origin_price"class="form-control"placeholder="請輸入原價">
                        </div>
                        <div class="form-group col-md-6">
                          <label for="price"class="text-info">售價</label>
                          <!-- //v-model=price-->
                          <input id="price"type="text" v-model="tempData.price"class="form-control"placeholder="請輸入售價">
                        </div>
                      </div>
                      <div class="form-group">
                         <label for="description"class="text-info">產品描述</label>
                        <!-- //v-model=descriptioin-->
                        <textarea type="text"id="description"v-model="tempData.description"class="form-control"placeholder="請輸入產品描述"></textarea>
                      </div>
                     <div class="form-group">
                         <label for="content"class="text-info">說明內容</label>
                        <!-- //v-model=content -->
                       <textarea type="text"id="content"v-model="tempData.content"class="form-control"placeholder="請輸入說明內容"></textarea>
                      </div>
                      <div class="form-group">
                        <div class="form-check">
                          <!-- //v-model=is_enabled-->
                          <input id="is_enabled" v-model="tempData.is_enabled"class="form-check-input" type="checkbox":true-value="1":false-value="0"
                          >
                        <label class="form-check-label text-info" for="is_enabled">是否啟用</label>
                        </div>
                      </div>
                     </div>
                    </div>
                    </div>
             
                 <!--/moda-body -->
                   <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" @click="updateData">確認</button>
                    </div>
                    </div>
                </div>
            </div>
   <!-- ==========表格=========== -->
                <table class="table">
                  <thead class="thead-light">
                    <tr >
                      <th width="120">分類</th>
                      <th >產品名稱</th>
                      <th width="120">原價</th>
                      <th width="120">售價</th>
                      <th width="150">是否啟用</th>
                      <th width="200">編輯</th>
                    </tr>
                  </thead>
  <!-- ------呈顯資料-------- -->
          <tbody>
            <tr v-for="item in products":key="item.id">
              <th scope="row">{{item.category}}</th>
              <td >{{item.title}}</td>
              <td>{{item.origin_price}}</td>
              <td>{{item.price}}</td>
              <td>
                <span v-if="item.is_enabled"class="text-success">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                <button type="button" class="btn btn-primary mr-3"data-toggle="modal" data-target="#exampleModal"@click="openModal(item)">編輯</button>
                <button type="button" class="btn btn-danger"data-toggle="modal" data-target="#deleteModal"@click="removeData(item)">刪除</button>
                </div>
              </td>
            </tr>
            </tbody>
          </table> 
<!-- Modal -->
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-danger">
        <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        是否刪除{{tempData.title}}商品
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary"@click="removeDone()">確認刪除</button>
      </div>
    </div>
  </div>
</div>
</div>
<!-- <---------message---------> 
  
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1586934917210,
          unit: "台",
          category: "掌上主機",
          title: "Switch",
          origin_price: 20000,
          price: 9980,
          description: "想玩就玩",
          content: "動森太好玩惹",
          is_enabled: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        },
        {
          id: 1196934917910,
          unit: "台",
          category: "主機",
          title: "PS5 Wifi",
          origin_price: 29999,
          description: "次世代超強規格",
          content: "我也想要換一台 PS5 Wifi",
          price: 9487,
          is_enabled: 0,
          imageUrl:
            "https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        }
      ],
      tempData: {}
    };
  },
  methods: {
    updateData() {
      if (this.tempData.id) {
        var index;
        this.products.forEach((item, key) => {
          if (item.id === this.tempData.id) {
            index = key;
          }
        });
        this.$set(this.products, index, this.tempData);
        this.tempData = {};
      } else {
        this.tempData.id = new Date().getTime();
        console.log(this.tempData.id);
        this.products.push(this.tempData);
      }
    },
    openModal(item) {
      if (item === "false") {
        this.tempData = {};
        console.log(this.tempData);
      } else {
        this.tempData = Object.assign({}, item);
      }
    },
    removeData(item) {
      console.log(item);
      this.tempData = Object.assign({}, item);
    },
    removeDone() {
      console.log(this.tempData.id);
      var i;
      this.products.forEach((item, key) => {
        if (item.id === this.tempData.id) {
          i = key;
        }
        this.products.splice(i, 1);
      });
    }
  }
};
</script>

<style lang="css">
.message {
  color: pink;
  font-size: 1.4em;
}
</style>
