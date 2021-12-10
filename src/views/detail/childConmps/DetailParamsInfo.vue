<template>
  <div class="params-info" v-if="Object.keys(itemParams).length != 0">
    <div class="size-info">
      <table>
        <tr v-for="item in itemParams.rule.tables[0]">
          <td>{{ item[0] }}</td>
          <td>{{ item[1] }}</td>
          <td>{{ item[2] }}</td>
          <td>{{ item[3] }}</td>
          <td>{{ item[4] }}</td>
        </tr>
      </table>
    </div>
    <div class="message-info">
      <table>
        <tr v-for="item in itemParams.info.set">
          <td>{{ item.key }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params-info {
  padding: 0 10px;
  background-color: #fff;
}
.size-info {
  padding: 20px 0 10px;
  border-bottom: 3px solid rgb(100, 100, 100, 0.1);
}
.size-info table tr {
  height: 40px;
}
.size-info table td {
  width: 90px;
  text-align: left;
}
.message-info {
  padding: 10px 0;
  border-bottom: 2px solid rgb(100, 100, 100, 0.1);
}
.message-info table tr {
  height: 30px;
}
.message-info table tr td:first-child {
  width: 90px;
}
.message-info table tr td:nth-child(2) {
  color: red;
}
</style>