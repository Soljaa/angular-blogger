import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  postsListFilmes: { link: string, title: string }[] = [
    {
      link: 'https://cdn.ome.lt/0vDeKjgR2_zv38XYTAdg08RMtpM=/480x360/smart/extras/conteudos/mamma_mia_amanda_seyfried_Lx0lWlH.jpg',
      title: 'Mamma Mia 3 vai acontecer',
    },
    {
      link: 'https://cdn.ome.lt/ulLpSr3rWUgenUmzqeyaq0chl_8=/480x360/smart/extras/conteudos/fear_the_walking_dead.jpg',
      title: 'Fear The Walking Dead terá final dividido em duas partes',
    },
    {
      link: 'https://cdn.ome.lt/oJ9jU5P__Owta4ofHQuGIKi7BrY=/480x360/smart/extras/conteudos/montagem_com_wandinha_barbie_e_the_bear.jpg',
      title: 'Sindicato dos atores proíbe fantasias de Barbie e outras produções no Halloween',
    },
    {
      link: 'https://cdn.ome.lt/G8Tkel2XUmAw0fLKGanZWoDtS8g=/480x360/smart/extras/conteudos/deadpool_3.webp',
      title: 'Deadpool 3 terá estreia adiada, segundo site',
    },
    {
      link: 'https://cdn.ome.lt/vkCL4fAutd33FuQF3hm1nUF337k=/480x360/smart/extras/conteudos/Design_sem_nome_2_4hOrZ8L.jpg',
      title: 'Emma Stone detalha trama de Pobres Criaturas em novo clipe estendido; assista',
    },
  ];
  postsListFutebol: { link: string, title: string }[] = [
    {
      link: 'https://s2-ge.glbimg.com/HmFzY5kEH5DhWWt6lQK4FxgEbTo=/1080x608/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/W/c/Dty4uSQMuQbwEnpoBDFw/agif23101919180882.jpg',
      title: 'Tite e o novo Flamengo',
    },
    {
      link: 'https://s2-ge.glbimg.com/Bl_Qxztj6Kzr2Ov_rLm4nLLKRhM=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/F/W/GNxd9hQdGBXrAwCK5Chg/39u0658.jpg',
      title: 'Yuri Alberto fala sobre golaço e chance perdida em empate do Corinthians: "Consegui me redimir"',
    },
    {
      link: 'https://s2-ge.glbimg.com/zebjWdVhAFfMv0l1qn64IAbHcJQ=/1080x608/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/K/p/gMRDrbRiAKlmnZ7evpaA/dur-3905.jpg',
      title: 'Dos extremos de Marcelo ao 2º tempo espetacular. O Fluminense se fortalece',
    },
    {
      link: 'https://s2-ge.glbimg.com/7mhPtwHhrddgd8fUQ0s5GDvwjT4=/1080x608/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/H/X/DwGUXFTWWkDl8oXYfkbw/1-26-.jpg',
      title: 'Atuações: Yuri e Maycon vão bem, mas mudanças recuam o Corinthians; dê suas notas',
    },
    {
      link: 'https://s2-ge.glbimg.com/bAVBB_rOP6GMwFbxHQOi8e6jmJo=/1080x608/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/T/0/pRCwjeT9iPyi4UesAvUQ/whatsapp-image-2023-10-19-at-23.09.37.jpeg',
      title: 'Felipe Melo, do Fluminense, é expulso no banco, invade o campo e peita o árbitro',
    },
  ];
}
