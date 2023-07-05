<template>
  <div>
      <h3 class="Withdra pt-3 pb-3">Withdrapt</h3>
     <div class="boxrecent ps-3">
   
      <div class="overflow-auto">
      <b-table
          id="my-table"
          hover 
          :items="items"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          small
      >
    
      <template #cell(Status) ="data">
        <div :class="classObject(data.item.Status)">
            {{data.item.Status}}
        </div>   
      </template>

      <template #cell(WithdrwalMethods) ="data">
        <div>
          {{ hideEmail(data.item.WithdrwalMethods) }}
        </div>   
      </template>

    </b-table>

      <div class="d-flex justify-content-end">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
      ></b-pagination>
      </div>
  </div>
     </div>
     
     <b-row class="mt-3">
     <b-col sm="12" md="6" lg="6">
              <div class="boxearning p-2">
                  <h5 class="Earning">Earning</h5>
                  <div class="text-center">
                  <img class="img-chartcontent" src="@/assets/img/chartcontent.png" alt="">
                      <p class="dedailes-Earning pt-2">your earning this mounth </p>
                      <h2 class="numearning pt-2">$180</h2>
                      <p class="dedailes-Earning ">05 jun 2021 at 11:00 Pm</p>
                      <b-button class="mt-3" variant="danger">Withdra All Earning</b-button>
                  </div>
              </div>
          </b-col>
          <b-col sm="12"  md="6" lg="6">
              <div class="lastearning p-2">
                  <div  class="d-flex justify-content-between" >
                      <div><h5 class="lastEarning">{{$t('lastEarning')}}</h5></div>
                      <div class="datelastearning pt-2">20/20/2021</div>
                  </div>
                  <div v-for="(item, index) in 25" :key="index" class="d-flex justify-content-between mt-2 mb-2">
                      <div  class="d-flex justify-content-between ">
                          <div>
                              <div class="dolarr ps-2 pe-2">
                                  <p class="p-1">$</p>
                              </div>
                          </div>
                          <div class="profit pt-2 ms-2">profit from Arab Share</div>
                      </div>
                      <div class="price">+50$</div>
                  </div>
              </div>
            </b-col>
  </b-row>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        perPage: 5,
        currentPage: 1,
        fields: ['Date', 'TransactionNu', 'WithdrwalMethods', 'Amount','Status'],
        items: [
          {Date: '20/20/2021', TransactionNu:'#fh1231234',WithdrwalMethods:'mohammed@gmail.com',Amount:'50$',Status:'pandding'},
          {Date: '20/20/2021', TransactionNu:'#fh1231234',WithdrwalMethods:'ahmed@gmail.com', Amount:'50$',Status:'successfull'},
          {Date: '20/20/2021', TransactionNu:'#fh1231234',WithdrwalMethods:'mohammed@gmail.com',Amount:'50$',Status:'successfull'},
          {Date: '20/20/2021', TransactionNu:'#fh1231234',WithdrwalMethods:'mohammed@gmail.com',Amount:'50$',Status:'successfull'},
          {Date: '20/20/2021', TransactionNu:'#fh1231234',WithdrwalMethods:'mohammed@gmail.com',Amount:'50$',Status:'successfull'},
          {Date: '20/20/2021', TransactionNu:'#fh1231234',WithdrwalMethods:'mohammed@gmail.com',Amount:'50$',Status:'successfull'},
          {Date: '20/20/2021', TransactionNu:'#fh1231234',WithdrwalMethods:'mohammed@gmail.com',Amount:'50$',Status:'successfull'},
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    methods:{
        classObject (k) {
        return {
          // if color in table in colum in  Status
          'text-success': k === 'successfull',
          'text-danger': k === 'pandding'
        }
      },
      hideEmail(email) {
      // Divide the elements of an array and group them again
        email = email.split("");
        for (var x = 0; x < email.length ; x++) {
          if (x >= 2) email.splice(x, 1, "*");
        }
        return email.join("")   
      }

    }
  }
</script>