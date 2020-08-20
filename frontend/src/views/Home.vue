<template>
  <div class="home">
    <markdown-it-vue  class="md-body my-5" :content="content" />    
    
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'


@Component({
  components: {
      MarkdownItVue, 
  }
})
export default class Post extends Vue {
  content = `
  # Привет!
  ### **Сейчас Ты находишься на сайте, который выполняет вполне простую роль - он хранит и отображает записи.**  
  ### **Записи - творение моих ума и души, каждая запись помогает мне лучше понимать себя и выражаться.**
  ### **Ну, и конечно тут будут записи про :raised_hands:_IT_:raised_hands:**
  ### **Немного про себя. Меня зовут Дамир, мне 20 лет и это один из способов моего самовыражения + удовлетворение своей личности как прагматика:)**
  ### **У меня много в голове и на душе, что долго хранилось, и Я очень надеюсь(ХОЧУ), что смогу вылить сюда все без опаски, открыто**
  ### **И в то же время, этот сайт поможет мне и во многих других сферах жизни, но в чем именно? Хех:grin:**
  ### Если Ты хочешь чем-то поделиться, то вот мой [ТГ](https://telete.in/Planktoshka)
  `
}
</script>
