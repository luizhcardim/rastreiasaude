import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Chart } from 'primereact/chart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function DialogCityInformation({ visible, closeDialog, data }) {


    const basicData = {
        labels: ['09/2019','11/2019','01/2020','02/2020','03/2020','04/2020', '05/2020', '06/2020', '07/2020', '08/2020', '10/2020', '11/2020'],
        datasets: [
            {
                label: 'Total de Notícias Rastreadas por mês',
                backgroundColor: '#42A5F5',
                data: [10,13,11,22,8,8, 9, 6, 3, 5, 5, 1]
            },
        ]
    };

    const basicOptions = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: '#495057'
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: '#495057'
                }
            }]
        }
    };



    const  noticias = [
        {
          "data" : "2020-11-04",
          "titulo" : "Boletim quinzenal da dengue registra mais dois óbitos no estado",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Boletim-quinzenal-da-dengue-registra-mais-dois-obitos-no-estado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-10-30",
          "titulo" : "Após sua pior epidemia de dengue em 2019, Paraná já ultrapassou a média histórica em 2020",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/apos-sua-pior-epidemia-de-dengue-em-2019-parana-ja-ultrapassou-a-media-historica-em-2020\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-10-30",
          "titulo" : "Sugestões e apoio do Ministério da Saúde incrementarão o Plano de Ação para Enfrentamento da Dengue do Paraná",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Sugestoes-e-apoio-do-Ministerio-da-Saude-incrementarao-o-Plano-de-Acao-para-Enfrentamento",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-10-29",
          "titulo" : "Paraná apresenta Plano Estadual de Enfrentamento à Dengue ao Ministério da Saúde",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Parana-apresenta-Plano-Estadual-de-Enfrentamento-Dengue-ao-Ministerio-da-Saude",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-10-27",
          "titulo" : "Sesa dá início ao ciclo de webconferências sobre enfrentamento da dengue",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Sesa-da-inicio-ao-ciclo-de-webconferencias-sobre-enfrentamento-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-10-26",
          "titulo" : "Semana de ações contra a dengue no Paraná",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Semana-de-acoes-contra-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-08-25",
          "titulo" : "Paraná tem 191 casos de dengue confirmados ",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Parana-tem-191-casos-de-dengue-confirmados",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-08-11",
          "titulo" : "Começa o novo período de monitoramento da dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Comeca-o-novo-periodo-de-monitoramento-da-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-08-11",
          "titulo" : "Começa o novo período de monitoramento da dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=108313&tit=Comeca-o-novo-periodo-de-monitoramento-da-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-08-11",
          "titulo" : "Paraná inicia novo período de monitoramento da dengue com 79 novos casos",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/parana-inicia-novo-periodo-de-monitoramento-da-dengue-com-79-novos-casos\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-08-11",
          "titulo" : "Começa o novo período de monitoramento da dengue no Paraná",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Comeca-o-novo-periodo-de-monitoramento-da-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-07-14",
          "titulo" : "Governo do Paraná já abriu 913 leitos de UTI para Covid-19",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/governo-do-parana-ja-abriu-913-leitos-de-uti-para-covid-19\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-07-13",
          "titulo" : "Governo do Estado já abriu 913 leitos de UTI para Covid-19",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Governo-do-Estado-ja-abriu-913-leitos-de-UTI-para-Covid-19",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-07-13",
          "titulo" : "Governo do Estado já abriu 913 leitos de UTI para Covid-19",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Governo-do-Estado-ja-abriu-913-leitos-de-UTI-para-Covid-19",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-06-30",
          "titulo" : "Dengue apresenta sinais de redução no Paraná, informa a Saúde\r\n\r\n",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=107667&tit=Dengue-apresenta-sinais-de-reducao-no-Parana-informa-a-Saude--",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-06-30",
          "titulo" : "Dengue apresenta sinais de redução no Paraná, aponta a Sesa",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Dengue-apresenta-sinais-de-reducao-no-Parana-aponta-Sesa",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-06-30",
          "titulo" : "Dengue apresenta sinais de redução no Paraná, aponta a Sesa",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Dengue-apresenta-sinais-de-reducao-no-Parana-aponta-Sesa",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-06-01",
          "titulo" : "Sesa apresenta na Alep balanço de ações e investimentos do primeiro quadrimestre de 2020",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Sesa-apresenta-na-Alep-balanco-de-acoes-e-investimentos-do-primeiro-quadrimestre-de-2020",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-06-01",
          "titulo" : "Sesa apresenta na Alep balanço de ações e investimentos do primeiro quadrimestre de 2020",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Sesa-apresenta-na-Alep-balanco-de-acoes-e-investimentos-do-primeiro-quadrimestre-de-2020",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-06-01",
          "titulo" : "Saúde apresenta balanço do quadrimestre na Assembleia",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=107267&tit=Saude-apresenta-balanco-do-quadrimestre-na-Assembleia",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-05-12",
          "titulo" : "Paraná tem 167 mil casos de dengue e 132 mortes pela doença",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/parana-tem-167-mil-casos-de-dengue-e-132-mortes-pela-doenca-aponta-boletim\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-05-12",
          "titulo" : "Boletim semanal da dengue confirma mais dez mortes",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=106959&tit=Boletim-semanal-da-dengue-confirma-mais-dez-mortes",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-05-12",
          "titulo" : "Dez óbitos por dengue confirmados no boletim semanal da Sesa",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Dez-obitos-por-dengue-confirmados-no-boletim-semanal-da-Sesa",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-05-12",
          "titulo" : "Governador destaca a enfermagem na luta contra a Covid-19",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Governador-destaca-enfermagem-na-luta-contra-Covid-19",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-05-12",
          "titulo" : "Dez óbitos por dengue confirmados no boletim semanal da Sesa",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Dez-obitos-por-dengue-confirmados-no-boletim-semanal-da-Sesa",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-05-12",
          "titulo" : "Governador destaca a enfermagem na luta contra a Covid-19",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Governador-destaca-enfermagem-na-luta-contra-Covid-19",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-05-05",
          "titulo" : "Beto Preto reforça atenção no combate à dengue mesmo durante a pandemia da Covid-19",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Beto-Preto-reforca-atencao-no-combate-dengue-mesmo-durante-pandemia-da-Covid-19",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-05-05",
          "titulo" : "Beto Preto reforça atenção no combate à dengue mesmo durante a pandemia da Covid-19",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Beto-Preto-reforca-atencao-no-combate-dengue-mesmo-durante-pandemia-da-Covid-19",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-05-05",
          "titulo" : "Epidemia de dengue atinge mais da metade das cidades do Estado",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=106849&tit=Epidemia-de-dengue-atinge-mais-da-metade-das-cidades-do-Estado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-04-14",
          "titulo" : "Dengue é causa de morte de 105 pessoas desde agosto de 2019",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=106577&tit=Dengue-e-causa-de-morte-de-105-pessoas-desde-agosto-de-2019",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-04-14",
          "titulo" : "Dengue é causa de óbitos de 105 pessoas desde agosto de 2019",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Dengue-e-causa-de-obitos-de-105-pessoas-desde-agosto-de-2019",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-04-14",
          "titulo" : "Dengue é causa de óbitos de 105 pessoas desde agosto de 2019",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Dengue-e-causa-de-obitos-de-105-pessoas-desde-agosto-de-2019",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-04-10",
          "titulo" : "Norte Pioneiro ganha novos leitos de UTI para o combate ao coronavírus",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/norte-pioneiro-ganha-novos-leitos-de-uti-para-o-combate-ao-coronavirus\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-04-09",
          "titulo" : "Hospital Regional do Norte Pioneiro ganha dez leitos de UTI",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Hospital-Regional-do-Norte-Pioneiro-ganha-dez-leitos-de-UTI",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-04-09",
          "titulo" : "Hospital Regional do Norte Pioneiro ganha dez leitos de UTI",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Hospital-Regional-do-Norte-Pioneiro-ganha-dez-leitos-de-UTI",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-04-07",
          "titulo" : "Aeronaves já coletaram 1.457 amostras para testes de coronavírus",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Aeronaves-ja-coletaram-1457-amostras-para-testes-de-coronavirus",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-04-07",
          "titulo" : "Aeronaves já coletaram 1.457 amostras para testes de coronavírus",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Aeronaves-ja-coletaram-1457-amostras-para-testes-de-coronavirus",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-03-18",
          "titulo" : "Paraná mobiliza mais de 700 pessoas contra a dengue no sábado",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=106168&tit=Parana-mobiliza-mais-de-700-pessoas-contra-a-dengue-no-sabado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-03-18",
          "titulo" : "Paraná mobiliza mais de 700 pessoas contra a dengue no sábado",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Parana-mobiliza-mais-de-700-pessoas-contra-dengue-no-sabado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-03-18",
          "titulo" : "Paraná mobiliza mais de 700 pessoas contra a dengue no sábado",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Parana-mobiliza-mais-de-700-pessoas-contra-dengue-no-sabado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-03-10",
          "titulo" : "Governo reforça apoio aos municípios para combate à dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=106040&tit=Governo-reforca-apoio-aos-municipios-para-combate-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-03-10",
          "titulo" : "Governo do Estado libera mais uma etapa de recursos para combate à dengue; Paraná tem 52.652 casos confirmados",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Governo-do-Estado-libera-mais-uma-etapa-de-recursos-para-combate-dengue-Parana-tem-52652",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-03-10",
          "titulo" : "Governo do Estado libera mais uma etapa de recursos para combate à dengue; Paraná tem 52.652 casos confirmados",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Governo-do-Estado-libera-mais-uma-etapa-de-recursos-para-combate-dengue-Parana-tem-52652",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-03-10",
          "titulo" : "Paraná tem mais de 52 mil casos confirmados de dengue; número de mortes sobe para 37",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/parana-tem-mais-de-52-mil-casos-confirmados-de-dengue-numero-de-mortes-sobe-para-37\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-03-03",
          "titulo" : "Com mais 44 mil casos, Paraná passa a patamar de epidemia da dengue; número de mortes sobe para 30",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/com-mais-44-mil-casos-parana-passa-a-patamar-de-epidemia-da-dengue\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-26",
          "titulo" : "Paraná confirma mais de 9 mil casos de dengue em uma semana",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Parana-confirma-mais-de-9-mil-casos-de-dengue-em-uma-semana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-26",
          "titulo" : "Escola de Saúde promove cursos \r\nde Residência e Enfermagem",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=105856&tit=Escola-de-Saude-promove-cursos-de-Residencia-e-Enfermagem",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-26",
          "titulo" : "Paraná confirma mais de 9 mil casos de dengue em uma semana",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=105864&tit=Parana-confirma-mais-de-9-mil-casos-de-dengue-em-uma-semana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-26",
          "titulo" : "Paraná confirma mais de 9 mil casos de dengue em uma semana",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Parana-confirma-mais-de-9-mil-casos-de-dengue-em-uma-semana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-20",
          "titulo" : "Escola Pública de Saúde incentiva e promove a formação profissional no Estado",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Escola-Publica-de-Saude-incentiva-e-promove-formacao-profissional-no-Estado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-20",
          "titulo" : "Escola Pública de Saúde incentiva e promove a formação profissional no Estado",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Escola-Publica-de-Saude-incentiva-e-promove-formacao-profissional-no-Estado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-18",
          "titulo" : "Em estado de Alerta para a Dengue, Paraná confirma mais 10 óbitos pela doença",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Em-estado-de-Alerta-para-Dengue-Parana-confirma-mais-10-obitos-pela-doenca",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-18",
          "titulo" : "Estado reforça apoio aos municípios para combate à dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=105795&tit=Estado-reforca-apoio-aos-municipios-para-combate-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-18",
          "titulo" : "Em estado de Alerta para a Dengue, Paraná confirma mais 10 óbitos pela doença",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Em-estado-de-Alerta-para-Dengue-Parana-confirma-mais-10-obitos-pela-doenca",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-14",
          "titulo" : "Governador decreta Paraná em alerta contra dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=105746&tit=Governador-decreta-Parana-em-alerta-contra-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-14",
          "titulo" : "Decretado Estado de Alerta para o combate e controle da dengue no Paraná",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Decretado-Estado-de-Alerta-para-o-combate-e-controle-da-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-14",
          "titulo" : "Decretado Estado de Alerta para o combate e controle da dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Decretado-Estado-de-Alerta-para-o-combate-e-controle-da-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-11",
          "titulo" : "Sesa capacita profissionais para manejo do novo inseticida de combate à dengue",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Sesa-capacita-profissionais-para-manejo-do-novo-inseticida-de-combate-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-11",
          "titulo" : "Sesa capacita profissionais para manejo do novo inseticida de combate à dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Sesa-capacita-profissionais-para-manejo-do-novo-inseticida-de-combate-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-11",
          "titulo" : "Saúde treina profissionais para\r\nnovo produto de combate à dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=105679&tit=Saude-treina-profissionais-para-novo-produto-de-combate-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-10",
          "titulo" : "Saúde e Educação fazem orientação em conjunto no combate contra a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Saude-e-Educacao-fazem-orientacao-em-conjunto-no-combate-contra-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-10",
          "titulo" : "Saúde e Educação fazem orientação em conjunto no combate contra a dengue",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Saude-e-Educacao-fazem-orientacao-em-conjunto-no-combate-contra-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-10",
          "titulo" : "Saúde e Educação atuam em conjunto no combate à dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=105670&tit=Saude-e-Educacao-atuam-em-conjunto-no-combate-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-04",
          "titulo" : "Paraná regista mais de 14 mil casos de dengue e aponta situação de alerta para epidemia",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/parana-regista-mais-de-14-mil-casos-de-dengue-e-boletim-aponta-situacao-de-alerta-para-epidemia\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-04",
          "titulo" : "Incidência de casos aponta situação de alerta para epidemia de dengue no Paraná",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Incidencia-de-casos-aponta-situacao-de-alerta-para-epidemia-de-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-04",
          "titulo" : "Incidência aponta situação de alerta para epidemia de dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=105578&tit=Incidencia-aponta-situacao-de-alerta-para-epidemia-de-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-02-04",
          "titulo" : "Incidência de casos aponta situação de alerta para epidemia de dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Incidencia-de-casos-aponta-situacao-de-alerta-para-epidemia-de-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-01-30",
          "titulo" : "Mais de 1.200 profissionais participam de capacitação para manejo clínico da dengue no Paraná",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Mais-de-1200-profissionais-participam-de-capacitacao-para-manejo-clinico-da-dengue-no",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-01-30",
          "titulo" : "Mais de 1.200 profissionais participam de capacitação para manejo clínico da dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Mais-de-1200-profissionais-participam-de-capacitacao-para-manejo-clinico-da-dengue-no",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-01-30",
          "titulo" : "1.200 profissionais são capacitados\r\npara tratamento da dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=105504&tit=1.200-profissionais-sao-capacitados-para-tratamento-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-01-28",
          "titulo" : "Sobe para sete o número de óbitos por dengue no Paraná",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Sobe-para-sete-o-numero-de-obitos-por-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-01-28",
          "titulo" : "Sobe para sete o número de mortes por dengue no Paraná",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/sobe-para-sete-o-numero-de-mortes-por-dengue-no-parana\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-01-28",
          "titulo" : "Sobe para sete o número de óbitos por dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Sobe-para-sete-o-numero-de-obitos-por-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-01-28",
          "titulo" : "Sobe para sete o número de\r\nmortes por dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=105477&tit=Sobe-para-sete-o-numero-de-mortes-por-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-01-07",
          "titulo" : "Paraná tem hoje 5.343 casos de dengue confirmados",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Parana-tem-hoje-5343-casos-de-dengue-confirmados",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-01-07",
          "titulo" : "Paraná tem hoje 5.343 casos de dengue confirmados",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Parana-tem-hoje-5343-casos-de-dengue-confirmados",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-01-07",
          "titulo" : "Paraná tem 5.343 casos\r\nde dengue confirmados",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=105251&tit=Parana-tem-5.343-casos-de-dengue-confirmados",
          "municipio" : "Maringá"
        },
        {
          "data" : "2020-01-07",
          "titulo" : "Paraná registra mais de 2 mil novos casos de dengue em três semanas",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/parana-registra-mais-de-2-mil-novos-casos-de-dengue-em-apenas-tres-semanas\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-26",
          "titulo" : "Paraná registra primeiro óbito por dengue no período epidemiológico",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Parana-registra-primeiro-obito-por-dengue-no-periodo-epidemiologico",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-26",
          "titulo" : "Saúde registra primeira morte por dengue no segundo semestre",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=104792&tit=Saude-registra-primeira-morte-por-dengue-no-segundo-semestre",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-26",
          "titulo" : "Paraná registra primeiro óbito por dengue no período epidemiológico",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Parana-registra-primeiro-obito-por-dengue-no-periodo-epidemiologico",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-21",
          "titulo" : "Sete municípios em epidemia reforçam o alerta para a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Sete-municipios-em-epidemia-reforcam-o-alerta-para-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-21",
          "titulo" : "Sete municípios em epidemia reforçam o alerta para a dengue",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Sete-municipios-em-epidemia-reforcam-o-alerta-para-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-19",
          "titulo" : "Sete municípios em epidemia\r\nreforçam alerta para a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=104697&tit=Sete-municipios-em-epidemia-reforcam-alerta-para-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-12",
          "titulo" : "Paraná registra 104 novos casos\r\nde dengue em uma semana",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=104634&tit=Parana-registra-104-novos-casos-de-dengue-em-uma-semana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-12",
          "titulo" : "Paraná registra 104 novos casos de dengue em uma semana",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Parana-registra-104-novos-casos-de-dengue-em-uma-semana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-12",
          "titulo" : "Paraná registra 104 novos casos de dengue em uma semana",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Parana-registra-104-novos-casos-de-dengue-em-uma-semana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-05",
          "titulo" : "Aumenta para cinco o número de municípios em epidemia de dengue no Paraná",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/aumenta-para-cinco-o-numero-de-municipios-em-epidemia-de-dengue-no-parana\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-05",
          "titulo" : "Aumenta para cinco o número de municípios em epidemia de dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Aumenta-para-cinco-o-numero-de-municipios-em-epidemia-de-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-05",
          "titulo" : "Aumenta para cinco o número de municípios em epidemia de dengue",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Aumenta-para-cinco-o-numero-de-municipios-em-epidemia-de-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-11-05",
          "titulo" : "Mesmo com alerta, aumenta o número de cidades em epidemia\r\n",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=104524&tit=Mesmo-com-alerta-aumenta-o-numero-de-cidades-em-epidemia-",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-09-24",
          "titulo" : "Paraná tem um município em epidemia de dengue e oito em situação de alerta para a doença",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Parana-tem-um-municipio-em-epidemia-de-dengue-e-oito-em-situacao-de-alerta-para-doenca",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-09-24",
          "titulo" : "Paraná tem um município em epidemia e oito em alerta para a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=103863&tit=Parana-tem-um-municipio-em-epidemia-e-oito-em-alerta-para-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-09-24",
          "titulo" : "Paraná tem um município em epidemia de dengue e oito em situação de alerta para a doença",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Parana-tem-um-municipio-em-epidemia-de-dengue-e-oito-em-situacao-de-alerta-para-doenca",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-09-17",
          "titulo" : "Paraná registra o primeiro caso de Chikungunya no período epidemiológico",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Parana-registra-o-primeiro-caso-de-Chikungunya-no-periodo-epidemiologico",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-09-17",
          "titulo" : "Paraná registra o primeiro caso de Chikungunya no período epidemiológico",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Parana-registra-o-primeiro-caso-de-Chikungunya-no-periodo-epidemiologico",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-09-10",
          "titulo" : "Preocupação com a dengue aumenta ainda mais com a elevação da temperatura",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Preocupacao-com-dengue-aumenta-ainda-mais-com-elevacao-da-temperatura",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-09-10",
          "titulo" : "Preocupação com a dengue aumenta ainda mais com a elevação da temperatura",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Preocupacao-com-dengue-aumenta-ainda-mais-com-elevacao-da-temperatura",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-09-04",
          "titulo" : "População deve manter cuidados simples que evitam a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=103569&tit=Populacao-deve-manter-cuidados-simples-que-evitam-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-09-03",
          "titulo" : "Receita para acabar com o mosquito da dengue é evitar acúmulo de água e limpar recipientes",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Receita-para-acabar-com-o-mosquito-da-dengue-e-evitar-acumulo-de-agua-e-limpar-recipientes",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-09-03",
          "titulo" : "Receita para acabar com o mosquito da dengue é evitar acúmulo de água e limpar recipientes",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Receita-para-acabar-com-o-mosquito-da-dengue-e-evitar-acumulo-de-agua-e-limpar-recipientes",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-08-27",
          "titulo" : "Sesa indica situação de alerta para caso de dengue em Inajá",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Sesa-indica-situacao-de-alerta-para-caso-de-dengue-em-Inaja",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-08-27",
          "titulo" : "Sesa indica situação de alerta para caso de dengue em Inajá",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Sesa-indica-situacao-de-alerta-para-caso-de-dengue-em-Inaja",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-08-20",
          "titulo" : "Sesa orienta para mobilização efetiva de eliminação de focos do mosquito da dengue",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Sesa-orienta-para-mobilizacao-efetiva-de-eliminacao-de-focos-do-mosquito-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-08-20",
          "titulo" : "Sesa orienta para mobilização efetiva de eliminação de focos do mosquito da dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Sesa-orienta-para-mobilizacao-efetiva-de-eliminacao-de-focos-do-mosquito-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-06-25",
          "titulo" : "Saúde confirma mais casos de\r\nmortes por dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=102668&tit=Saude-confirma-mais-casos-de-mortes-por-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-06-25",
          "titulo" : "Mais casos de mortes por dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Mais-casos-de-mortes-por-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-06-25",
          "titulo" : "Mais casos de mortes por dengue no Paraná",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Mais-casos-de-mortes-por-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-05-28",
          "titulo" : "Sobe para 16 o número de mortes por dengue no Paraná, aponta boletim",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/sobe-para-16-o-numero-de-mortes-por-dengue-no-parana-aponta-boletim\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-05-28",
          "titulo" : "Aumentam casos e mortes \r\npor dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=102319&tit=Aumentam-casos-e-mortes-por-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-05-28",
          "titulo" : "Aumentam casos e mortes por dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Aumentam-casos-e-mortes-por-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-05-28",
          "titulo" : "Aumentam casos e mortes por dengue no Paraná",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Aumentam-casos-e-mortes-por-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-05-14",
          "titulo" : "Paraná registra mais três óbitos por dengue, no Noroeste e Norte\r\n",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=102148&tit=Parana-registra-mais-tres-obitos-por-dengue-no-Noroeste-e-Norte-",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-05-14",
          "titulo" : "Dengue registra três óbitos nas Regiões Noroeste e Norte",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Dengue-registra-tres-obitos-nas-Regioes-Noroeste-e-Norte",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-05-14",
          "titulo" : "Dengue registra três óbitos nas Regiões Noroeste e Norte",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Dengue-registra-tres-obitos-nas-Regioes-Noroeste-e-Norte",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-05-07",
          "titulo" : "Paraná tem mais duas mortes por dengue",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Parana-tem-mais-duas-mortes-por-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-05-07",
          "titulo" : "Paraná tem mais duas mortes por dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Parana-tem-mais-duas-mortes-por-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-05-07",
          "titulo" : "Paraná tem dois novos casos de morte por dengue; são dez no total",
          "uf" : "PR",
          "url" : "https:\/\/www.bandab.com.br\/saude\/parana-tem-dois-novos-casos-de-morte-por-dengue-sao-dez-no-total\/",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-05-07",
          "titulo" : "Paraná tem mais duas mortes \r\npor dengue confirmadas",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=102060&tit=Parana-tem-mais-duas-mortes-por-dengue-confirmadas",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-04-23",
          "titulo" : "Saúde lança campanha digital sobre medidas de combate à dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=101930&tit=Saude-lanca-campanha-digital-sobre-medidas-de-combate-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-04-23",
          "titulo" : "SESA lança material de divulgação sobre combate à dengue",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/SESA-lanca-material-de-divulgacao-sobre-combate-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-04-23",
          "titulo" : "SESA lança material de divulgação sobre combate à dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/SESA-lanca-material-de-divulgacao-sobre-combate-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-02-20",
          "titulo" : "Primeiro caso autóctone de \r\ndengue é confirmado na RMC",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=101216&tit=Primeiro-caso-autoctone-de-dengue-e-confirmado-na-RMC",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-02-19",
          "titulo" : "Dengue registra primeiro caso na Região Metropolitana de Curitiba",
          "uf" : "PR",
          "url" : "http:\/\/www.saude.pr.gov.br\/Noticia\/Dengue-registra-primeiro-caso-na-Regiao-Metropolitana-de-Curitiba",
          "municipio" : "Maringá"
        },
        {
          "data" : "2019-02-19",
          "titulo" : "Dengue registra primeiro caso na Região Metropolitana de Curitiba",
          "uf" : "PR",
          "url" : "https:\/\/www.saude.pr.gov.br\/Noticia\/Dengue-registra-primeiro-caso-na-Regiao-Metropolitana-de-Curitiba",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-11-23",
          "titulo" : "Saúde abre semana de combate \r\nao mosquito da dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=99627&tit=Saude-abre-semana-de-combate-ao-mosquito-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-11-20",
          "titulo" : "Legado do Governo em saúde \r\nbeneficia toda população, diz Cida",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=99569&tit=Legado-do-Governo-em-saude-beneficia-toda-populacao-diz-Cida",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-11-05",
          "titulo" : "Paraná encerra o ciclo de\r\noferta da vacina contra dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=99404&tit=Parana-encerra-o-ciclo-de-oferta-da-vacina-contra-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-10-10",
          "titulo" : "Paraná desenvolve estudo inédito sobre vacina da dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=99130&tit=Parana-desenvolve-estudo-inedito-sobre-vacina-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-08-02",
          "titulo" : "Em um ano, Paraná registrou 992 casos de dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=100510&tit=Em-um-ano-Parana-registrou-992-casos-de-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-05-03",
          "titulo" : "Controle da dengue precisa de \r\nações permanentes, diz secretário",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=98147&tit=Controle-da-dengue-precisa-de-acoes-permanentes-diz-secretario",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-04-17",
          "titulo" : "Municípios com cobertura vacinal \r\ntêm menor incidência de dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=97949&tit=Municipios-com-cobertura-vacinal-tem-menor-incidencia-de-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-04-10",
          "titulo" : "Paraná está há dois anos sem \r\nregistro de mortes por dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=97885&tit=Parana-esta-ha-dois-anos-sem-registro-de-mortes-por-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-03-19",
          "titulo" : "Campanha da vacina da dengue começa nesta terça-feira no Estado",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=97613&tit=Campanha-da-vacina-da-dengue-comeca-nesta-terca-feira-no-Estado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-03-14",
          "titulo" : "Estado entrega ambulâncias para mais quatro municípios",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=97559&tit=Estado-entrega-ambulancias-para-mais-quatro-municipios",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-02-22",
          "titulo" : "Palestras vão esclarecer dúvidas \r\nsobre vacina contra a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=97324&tit=Palestras-vao-esclarecer-duvidas-sobre-vacina-contra-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2018-01-16",
          "titulo" : "Chuvas diárias demandam cuidados redobrados com a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=96969&tit=Chuvas-diarias-demandam-cuidados-redobrados-com-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-11-07",
          "titulo" : "Paraná não registra mortes \r\npor dengue há 14 meses",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=96161&tit=Parana-nao-registra-mortes-por-dengue-ha-14-meses",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-10-31",
          "titulo" : "Saúde alerta para cuidados contra o mosquito da dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=96083&tit=Saude-alerta-para-cuidados-contra-o-mosquito-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-10-25",
          "titulo" : "Vacinação contra a dengue é prorrogada até 11 de novembro",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=95993&tit=Vacinacao-contra-a-dengue-e-prorrogada-ate-11-de-novembro",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-10-20",
          "titulo" : "Sábado é o Dia D de vacinação contra a dengue em 30 municípios",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=95942&tit=Sabado-e-o-Dia-D-de-vacinacao-contra-a-dengue-em-30-municipios",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-09-19",
          "titulo" : "Vacinação contra a dengue começa nesta quarta-feira",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=95484&tit=Vacinacao-contra-a-dengue-comeca-nesta-quarta-feira",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-09-01",
          "titulo" : "Saúde mobiliza Estado para nova vacinação contra a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=95295&tit=Saude-mobiliza-Estado-para-nova-vacinacao-contra-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-08-24",
          "titulo" : "Governo prepara mais uma etapa da vacinação contra a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=95177&tit=Governo-prepara-mais-uma-etapa-da-vacinacao-contra-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-04-10",
          "titulo" : "Segunda etapa da vacinação contra \r\ndengue atingiu 241 mil paranaenses",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=93444&tit=Segunda-etapa-da-vacinacao-contra-dengue-atingiu-241-mil-paranaenses",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-03-31",
          "titulo" : "Campanha de vacinação contra a \r\ndengue é prorrogada até 7 de abril",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=93322&tit=Campanha-de-vacinacao-contra-a-dengue-e-prorrogada-ate-7-de-abril",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-03-07",
          "titulo" : "Paraná amplia serviços de saúde e dedica 12% das receitas do Estado para o setor",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=92979&tit=Parana-amplia-servicos-de-saude-e-dedica-12-das-receitas-do-Estado-para-o-setor",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-03-02",
          "titulo" : "Segunda etapa da vacinação contra \r\na dengue começa nesta sexta-feira",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=92919&tit=Segunda-etapa-da-vacinacao-contra-a-dengue-comeca-nesta-sexta-feira",
          "municipio" : "Maringá"
        },
        {
          "data" : "2017-01-27",
          "titulo" : "Paraná se prepara \r\npara iniciar a segunda \r\ndose da vacina da dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=92527&tit=Parana-se-prepara-para-iniciar-a-segunda-dose-da-vacina-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-12-23",
          "titulo" : "Governo do Paraná inovou nas ações de saúde em 2016",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=92225&tit=Governo-do-Parana-inovou-nas-acoes-de-saude-em-2016",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-10-14",
          "titulo" : "No Paraná, campanha\r\nde vacinação contra a\r\ndengue imunizou 200 mil",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=91215&tit=No-Parana-campanha-de-vacinacao-contra-a-dengue-imunizou-200-mil",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-09-23",
          "titulo" : "Sábado tem dia D\r\na campanha de multivacinação\r\nem todo Estado",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90948&tit=Sabado-tem-dia-D-a-campanha-de-multivacinacao-em-todo-Estado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-09-21",
          "titulo" : "Dráuzio Varella apoia\r\na vacinação contra\r\na dengue no Paraná\r\n",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90909&tit=Drauzio-Varella-apoia-a-vacinacao-contra-a-dengue-no-Parana-",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-09-20",
          "titulo" : "Richa entrega 85 novos veículos para ampliar a frota da saúde\r\n",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90879&tit=Richa-entrega-85-novos-veiculos-para-ampliar-a-frota-da-saude-",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-09-19",
          "titulo" : "Campanha de vacinação\r\ncontra a dengue\r\ntermina neste sábado",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90858&tit=Campanha-de-vacinacao-contra-a-dengue-termina-neste-sabado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-09-13",
          "titulo" : "Entidades científicas indicam vacina contra a dengue em regiões de risco",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90774&tit=Entidades-cientificas-indicam-vacina-contra-a-dengue-em-regioes-de-risco",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-09-06",
          "titulo" : "Munhoz de Mello é o primeiro município a atingir meta da vacina contra dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90741&tit=Munhoz-de-Mello-e-o-primeiro-municipio-a-atingir-meta-da-vacina-contra-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-09-02",
          "titulo" : "Campanha de vacinação \r\ngratuita contra a \r\ndengue vai até dia 24",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90692&tit=Campanha-de-vacinacao-gratuita-contra-a-dengue-vai-ate-dia-24",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-08-22",
          "titulo" : "Paranaguá se mobiliza para vacinar população contra dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90501&tit=Paranagua-se-mobiliza-para-vacinar-populacao-contra-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-08-18",
          "titulo" : "Paraná reforça campanha\r\nde vacinação contra a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90465&tit=Parana-reforca-campanha-de-vacinacao-contra-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-08-13",
          "titulo" : "Paraná inicia campanha\r\ninédita de vacinação\r\ncontra a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90396&tit=Parana-inicia-campanha-inedita-de-vacinacao-contra-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-08-11",
          "titulo" : "Esclareça dúvidas sobre a vacinação\r\ncontra a dengue, que começa no sábado",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90358&tit=Esclareca-duvidas-sobre-a-vacinacao-contra-a-dengue-que-comeca-no-sabado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-08-09",
          "titulo" : "Paraná abre \r\npré-cadastro para\r\nvacinação contra dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90323&tit=Parana-abre-pre-cadastro-para-vacinacao-contra-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-08-06",
          "titulo" : "Profissionais destacam\r\nmomento histórico da\r\nvacina contra a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90293&tit=Profissionais-destacam-momento-historico-da-vacina-contra-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-08-03",
          "titulo" : "Paraná recebe 1º lote de\r\nvacinas contra a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90244&tit=Parana-recebe-1o-lote-de-vacinas-contra-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-08-02",
          "titulo" : "Paraná recebe 1º lote de \r\nvacinas contra a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=90238&tit=Parana-recebe-1o-lote-de-vacinas-contra-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-06-10",
          "titulo" : "Estado entrega unidades de saúde e ambulâncias em Doutor Camargo e Santa Fé",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=89489&tit=Estado-entrega-unidades-de-saude-e-ambulancias-em-Doutor-Camargo-e-Santa-Fe",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-06-07",
          "titulo" : "Paraná já destinou quase \r\nR$ 1,4 bilhão para a saúde em 2016",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=89411&tit=Parana-ja-destinou-quase-R-14-bilhao-para-a-saude-em-2016",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-05-18",
          "titulo" : "Richa reúne-se com ministro da Saúde\r\ne trata de pendências junto ao Estado",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=89147&tit=Richa-reune-se-com-ministro-da-Saude-e-trata-de-pendencias-junto-ao-Estado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-05-17",
          "titulo" : "Secretaria da Saúde divulga\r\nnovo boletim da dengue,\r\nzika e chikungunya",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=89139&tit=Secretaria-da-Saude-divulga-novo-boletim-da-dengue-zika-e-chikungunya",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-05-10",
          "titulo" : "Comissão de Infectologia discute \r\nvacina contra a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=89031&tit=Comissao-de-Infectologia-discute-vacina-contra-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-05-03",
          "titulo" : "Municípios do Paraná apresentam \r\ntendência de queda nos casos de dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=88929&tit=Municipios-do-Parana-apresentam-tendencia-de-queda-nos-casos-de-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-04-26",
          "titulo" : "Secretaria da Saúde divulga novo boletim da dengue, zika e chikungunya",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=88813&tit=Secretaria-da-Saude-divulga-novo-boletim-da-dengue-zika-e-chikungunya",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-03-22",
          "titulo" : "Estado vai financiar pesquisas \r\nsobre zika, dengue e chikungunya",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=88383&tit=Estado-vai-financiar-pesquisas-sobre-zika-dengue-e-chikungunya",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-03-15",
          "titulo" : "Cuidados com a dengue devem \r\ncontinuar durante o Outono",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=88282&tit=Cuidados-com-a-dengue-devem-continuar-durante-o-Outono",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-02-24",
          "titulo" : "Ceasas do Paraná \r\npromovem ações de \r\ncombate ao Aedes Aegypti",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=88001&tit=Ceasas-do-Parana-promovem-acoes-de-combate-ao-Aedes-Aegypti",
          "municipio" : "Maringá"
        },
        {
          "data" : "2016-02-10",
          "titulo" : "Com nova tecnologia do \r\nLacen, Paraná confirma \r\n25 casos de zika",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=87839&tit=Com-nova-tecnologia-do-Lacen-Parana-confirma-25-casos-de-zika",
          "municipio" : "Maringá"
        },
        {
          "data" : "2015-12-16",
          "titulo" : "Richa anuncia R$ 10 milhões extras\r\npara o combate à dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=87257&tit=Richa-anuncia-R-10-milhoes-extras-para-o-combate-a-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2015-06-10",
          "titulo" : "Casos notificados de \r\ndengue caem pela \r\n6ª semana consecutiva",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=84476&tit=Casos-notificados-de-dengue-caem-pela-6a-semana-consecutiva",
          "municipio" : "Maringá"
        },
        {
          "data" : "2015-06-09",
          "titulo" : "Governo do Paraná já \r\ndestinou mais de R$ 1 bilhão \r\npara saúde em 2015",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=84458&tit=Governo-do-Parana-ja-destinou-mais-de-R-1-bilhao-para-saude-em-2015",
          "municipio" : "Maringá"
        },
        {
          "data" : "2015-03-11",
          "titulo" : "Governo do Estado reforça \r\ncombate à dengue no Norte, \r\nNoroeste e Oeste",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=83327&tit=Governo-do-Estado-reforca-combate-a-dengue-no-Norte-Noroeste-e-Oeste",
          "municipio" : "Maringá"
        },
        {
          "data" : "2014-11-05",
          "titulo" : "Novo boletim \r\ndetalha situação \r\nda dengue no Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=81970&tit=Novo-boletim-detalha-situacao-da-dengue-no-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2014-07-07",
          "titulo" : "Paraná confirma \r\ndois casos de \r\nfebre chikungunya",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=81201&tit=Parana-confirma-dois-casos-de-febre-chikungunya",
          "municipio" : "Maringá"
        },
        {
          "data" : "2014-06-24",
          "titulo" : "Paraná investiu R$ 708 \r\nmilhões em saúde no \r\nprimeiro quadrimestre",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=81028&tit=Parana-investiu-R-708-milhoes-em-saude-no-primeiro-quadrimestre",
          "municipio" : "Maringá"
        },
        {
          "data" : "2014-06-04",
          "titulo" : "Governo vai repassar R$ 2,2 milhões \r\npara combate à dengue em 35 municípios",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=80731&tit=Governo-vai-repassar-R-22-milhoes-para-combate-a-dengue-em-35-municipios",
          "municipio" : "Maringá"
        },
        {
          "data" : "2014-04-29",
          "titulo" : "Combate à dengue deve \r\ncontinuar mesmo com \r\nqueda das temperaturas",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=80134&tit=Combate-a-dengue-deve-continuar-mesmo-com-queda-das-temperaturas",
          "municipio" : "Maringá"
        },
        {
          "data" : "2014-01-22",
          "titulo" : "Oeste terá atendimento a queimados \r\ne Centro de Especialidades Médicas",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=78794&tit=Oeste-tera-atendimento-a-queimados-e-Centro-de-Especialidades-Medicas",
          "municipio" : "Maringá"
        },
        {
          "data" : "2013-09-30",
          "titulo" : "Governo apresenta na \r\nAssembleia balanço \r\nquadrimestral da Saúde",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=76980&tit=Governo-apresenta-na-Assembleia-balanco-quadrimestral-da-Saude",
          "municipio" : "Maringá"
        },
        {
          "data" : "2013-06-04",
          "titulo" : "Secretaria divulga \r\nnovos números \r\nda dengue no Estado",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=74889&tit=Secretaria-divulga-novos-numeros-da-dengue-no-Estado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2013-04-15",
          "titulo" : "Casos de dengue \r\ncaem pela oitava \r\nsemana consecutiva",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=74013&tit=Casos-de-dengue-caem-pela-oitava-semana-consecutiva",
          "municipio" : "Maringá"
        },
        {
          "data" : "2013-04-08",
          "titulo" : "Casos de dengue \r\ncaem em 65% dos \r\nmunicípios em epidemia",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=73867&tit=Casos-de-dengue-caem-em-65-dos-municipios-em-epidemia",
          "municipio" : "Maringá"
        },
        {
          "data" : "2013-03-18",
          "titulo" : "Seis municípios \r\napresentam redução \r\nnos casos de dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=73527&tit=Seis-municipios-apresentam-reducao-nos-casos-de-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2013-03-11",
          "titulo" : "Governo do Paraná libera \r\nmais R$ 2 milhões para o \r\ncombate à dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=73407&tit=Governo-do-Parana-libera-mais-R-2-milhoes-para-o-combate-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2013-03-04",
          "titulo" : "Secretaria da Saúde \r\ndivulga boletim \r\nsemanal da dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=73287&tit=Secretaria-da-Saude-divulga-boletim-semanal-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2013-02-20",
          "titulo" : "Secretaria reforça retaguarda de \r\natendimento para casos de dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=73121&tit=Secretaria-reforca-retaguarda-de-atendimento-para-casos-de-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2013-02-13",
          "titulo" : "Regiões centro-oeste \r\ne noroeste concentram \r\ncasos de dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=73038&tit=Regioes-centro-oeste-e-noroeste-concentram-casos-de-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2013-01-11",
          "titulo" : "Secretaria da Saúde \r\ndescarta morte por \r\ndengue em Cambará",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=72634&tit=Secretaria-da-Saude-descarta-morte-por-dengue-em-Cambara",
          "municipio" : "Maringá"
        },
        {
          "data" : "2012-12-17",
          "titulo" : "Beto Richa destaca avanços da \r\nsaúde em dois anos de gestão",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=72332&tit=Beto-Richa-destaca-avancos-da-saude-em-dois-anos-de-gestao",
          "municipio" : "Maringá"
        },
        {
          "data" : "2012-06-18",
          "titulo" : "Paraná confirma mais\r\ntrês mortes por gripe A",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=69495&tit=Parana-confirma-mais-tres-mortes-por-gripe-A",
          "municipio" : "Maringá"
        },
        {
          "data" : "2012-05-15",
          "titulo" : "Paraná registra segundo caso importado de dengue tipo 4",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=68988&tit=Parana-registra-segundo-caso-importado-de-dengue-tipo-4",
          "municipio" : "Maringá"
        },
        {
          "data" : "2012-05-14",
          "titulo" : "Secretaria da Saúde investe R$ 3,8 milhões em sistema de videoconferência",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=68965&tit=Secretaria-da-Saude-investe-R-38-milhoes-em-sistema-de-videoconferencia",
          "municipio" : "Maringá"
        },
        {
          "data" : "2012-05-10",
          "titulo" : "Saúde confirma primeira morte por dengue no Paraná em 2012",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=68919&tit=Saude-confirma-primeira-morte-por-dengue-no-Parana-em-2012",
          "municipio" : "Maringá"
        },
        {
          "data" : "2012-03-26",
          "titulo" : "Exames descartam dengue como causa de mortes no Estado",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=68273&tit=Exames-descartam-dengue-como-causa-de-mortes-no-Estado",
          "municipio" : "Maringá"
        },
        {
          "data" : "2012-03-07",
          "titulo" : "Francisco Beltrão e Toledo \r\nconfirmam 134 casos \r\nautóctones de dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=67974&tit=Francisco-Beltrao-e-Toledo-confirmam-134-casos-autoctones-de-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2012-02-15",
          "titulo" : "Lixo responde por 53% dos potenciais criadouros de mosquito da dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=67722&tit=Lixo-responde-por-53-dos-potenciais-criadouros-de-mosquito-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2011-08-31",
          "titulo" : "Paraná registra primeiro \r\ncaso de Den 4, variação \r\ndo vírus da dengue ",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=65421&tit=Parana-registra-primeiro-caso-de-Den-4-variacao-do-virus-da-dengue-",
          "municipio" : "Maringá"
        },
        {
          "data" : "2011-07-25",
          "titulo" : "Comitê recebe relatórios sobre a dengue em 65 municípios do Paraná",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=64832&tit=Comite-recebe-relatorios-sobre-a-dengue-em-65-municipios-do-Parana",
          "municipio" : "Maringá"
        },
        {
          "data" : "2011-03-21",
          "titulo" : "Secretaria da Saúde alerta 37 municípios sobre risco de dengue ",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=62699&tit=Secretaria-da-Saude-alerta-37-municipios-sobre-risco-de-dengue-",
          "municipio" : "Maringá"
        },
        {
          "data" : "2011-03-04",
          "titulo" : "Governo do Paraná repassou mais de R$ 2 milhões para o combate à dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=62418&tit=Governo-do-Parana-repassou-mais-de-R-2-milhoes-para-o-combate-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2011-02-14",
          "titulo" : "Região de Foz do Iguaçu terá mais R$ 140 mil para combater a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=62044&tit=Regiao-de-Foz-do-Iguacu-tera-mais-R-140-mil-para-combater-a-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2011-02-07",
          "titulo" : "Saúde reorganiza retaguarda hospitalar para atender pacientes com suspeita de dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=61898&tit=Saude-reorganiza-retaguarda-hospitalar-para-atender-pacientes-com-suspeita-de-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2011-01-21",
          "titulo" : "Plano emergencial de 90 dias ampliará combate à dengue nas regiões de alerta",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=61643&tit=Plano-emergencial-de-90-dias-ampliara-combate-a-dengue-nas-regioes-de-alerta",
          "municipio" : "Maringá"
        },
        {
          "data" : "2011-01-20",
          "titulo" : "Secretaria da Saúde capacita 750 profissionais para diagnóstico e tratamento da dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=61624&tit=Secretaria-da-Saude-capacita-750-profissionais-para-diagnostico-e-tratamento-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2011-01-17",
          "titulo" : "Secretaria da Saúde capacita profissionais para diagnóstico e tratamento da dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=61537&tit=Secretaria-da-Saude-capacita-profissionais-para-diagnostico-e-tratamento-da-dengue",
          "municipio" : "Maringá"
        },
        {
          "data" : "2011-01-10",
          "titulo" : "Estrutura especial passa a atender municípios em alerta contra a dengue",
          "uf" : "PR",
          "url" : "http:\/\/www.aen.pr.gov.br\/modules\/noticias\/article.php?storyid=61399&tit=Estrutura-especial-passa-a-atender-municipios-em-alerta-contra-a-dengue",
          "municipio" : "Maringá"
        }
      ]


    function onHide() {
        closeDialog()
    }

    return (
        data &&
        <Dialog style={{width: '45vw'}} header={data['f2']} visible={visible} modal onHide={onHide}>
            <h3>Dados Gerais</h3>
            <p>Total de notícias rastreadas: {data['f3']}</p>
            <p>Rating de notícias rastreadas: {data['f4']}</p>
            <h3>Classificação</h3>
            <p>Número de municípios obtidos nessa consulta: {data['f5']}</p>
            <p>Posição de {data['f2']} (da menor frequência até a maior): {data['f6']}</p>

            <h3>Gráfico Temporal</h3>
            <Chart type="bar" data={basicData} options={basicOptions} />

            <h3>Notícias rastreadas</h3>

            {noticias.map(n=>(
                <div style={{marginBottom:'10px'}}>{n.data} - <a target="_blank" href={n.url}>{n.titulo}</a></div>
            ))}
</Dialog>
    );
}