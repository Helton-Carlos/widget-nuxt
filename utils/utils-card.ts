export function cards() {
  const cards = [
    {
      id: 0,
      title: "Maceió-AL",
      persona: "Wagner Silva",
      city: "Maceió",
      state: "Alagoas",
      country: "Brasil",
      imageMain:
        "https://blog.xpeducacao.com.br/wp-content/uploads/2022/08/Praia-como-adicionar-imagem-html-1024x685.jpg",
      imagePersona:
        "https://cdn.pixabay.com/photo/2021/04/25/14/30/man-6206533_960_720.jpg",
      definitions: ["Praia", "Hotel", "Café da manhã", "Passeios"],
      money: 2.799,
      describe:
        "Maceió, é a capital do estado de Alagoas, na costa leste do Brasil. O seu centro histórico alberga casas coloniais cor de pastel, uma catedral do século XIX e o Museu Théo Brandão de Antropologia e Folclore, localizado numa mansão renovada à beira-mar.",
    },
    {
      id: 1,
      title: "São Paulo - SP",
      persona: "Renata Clara",
      city: "São Paulo",
      state: "São Paulo",
      country: "Brasil",
      imageMain:
        "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg",
      imagePersona:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3UyK7vdPu9kZ2WACUog-drM46XGQHkN3flCeE53RTBpAn1U11AjP8T8yohGb3FVcoFg&usqp=CAU",
      definitions: ["Hotel", "Passeios"],
      money: 1.705,
      describe:
        "São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929.",
    },
    {
      id: 2,
      title: "Recife - PE",
      persona: "Ana Flora",
      city: "Penambuco",
      state: "Alagoas",
      country: "Brasil",
      imageMain:
        "https://st.depositphotos.com/1010338/2099/i/600/depositphotos_20999947-stock-photo-tropical-island-with-palms.jpg",
      imagePersona:
        "https://static.vecteezy.com/ti/fotos-gratis/t2/3491890-rosto-close-up-retrato-de-menina-bonita-loira-com-pele-fresca-imagem-horizontal-gratis-foto.jpg",
      definitions: ["Praia", "Passeios"],
      money: 1.705,
      describe:
        "Recife, a capital do estado de Pernambuco, no nordeste do Brasil, distingue-se pelos seus vários rios, pontes, ilhéus e penínsulas. Recife Antigo, na própria ilha junto ao porto, é o centro histórico da cidade antiga que data do século XVI.",
    },
    {
      id: 3,
      title: "Toronto - Canadá",
      persona: "Lucas Smith",
      city: "Toronto",
      state: "Alagoas",
      country: "Canadá",
      imageMain:
        "https://i.vimeocdn.com/video/1285724585-3bf8f2e5156b3c0d2b99eeb2f92b8589148688a47c2f98120_640x360.jpg",
      imagePersona:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIYGRESGBgYGBkcHRkZGRgYGBkaGhkYGRgcIS4mHB4sIRwaJjgoKy8xNTU1HCQ9QDszPy40NTEBDAwMEA8QHxISHzQrJCs6NDQxNDU0NDQ9NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ2MTQxNDQ0NDQ0NDQ0NDY0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIEAwUGBwj/xAA9EAABAwIEBAQEAwYGAgMAAAABAAIRAyEEEjFBIkJRYQUGMlITYnGBU3KRFCMzobHBB0OCsuHxkvAkVNH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAjEQEAAgICAwACAwEAAAAAAAAAAQIDESExBBJBYYEyUVIi/9oADAMBAAIRAxEAPwD01CEKyDQkmgEIQgEIQgEIQgEIQgEIQgEIlIlA0SquIxjKYlzgAOpAhabE+ccHTJHxc5HsaXD/AMtP5qDTo0LkB/iFgJDS546nIYH6GVv/AA3xjD4luajUa/WwNxETI1Go/VNmmwQiUKQ0JJoGhJNAJpJoBCEIBCEIBCEIGhCEGJCEIBNJCBoSQgaSEIGhJNAIQhAJISKBPeACSYA1J0C8+8++an0qn7PReWkNDnuBgidII7R+oWq/xG811DVdhKLwKVOM5afW7dpI5RoR1lcScLiKzTUIcQI4idtYE3VZlasTKziPEHVOKpUc5xOriXH7T9v1UMRWOQAW7KmyhUDpLCQNAN/+E3/EmHMyybz/AEA3UcJ5YaZvJNpWy8L8UqUXipTdlyaGGm/XiBCpvpREj6BY3GY6BEdPX/JXnE4omliCBU1a6A0HtG5+y7gFfOeDxL6b21KZ4mkEAxBgzBG6938u4018PTqFuUvaCQJid7HRTEomG2QkmrINNRTQNCEIGhCEAhCEAhCEAhCEGNCEIBCEIBCEIBCEkDQkmgEIQgFqvM2NfQweIq0/Wxhy9nGwP2mVtFpfODQcBjJ/Cef0E/2QeL+X/DnYzE5TdrTmeTNxN56kr1zDYGmAGhogCNFwn+H7IfUdF3/0FgvR8KFkyTu2m7DWIrthb4TSBn4bZPYKjivLFKoZM9f+l0TdE4VdL7c1S8r0WgjKDPUA/wBVWd5UwzXF3w//AH+66p6p13KJ3CdRLxjxrwsUMRUp6jNwyNGnQL2vysxzcFhQ4yfhsP2IkD7AgfZeW+eaTm1y46ES09R0+xC9a8GEYbDgaCkz/YFqxzuNsOSNWmF9SCxqQK6OaSaUoQNNRTQNNJCBoSTQCEIQCEIQY0kIQNCSEDQkhAIQhAIQhAIQhAKj4vSZUoVaT3BrarHsk7F7SP8An7K4qniVMFjZ0a4H+RVbTqsytSsWtES858iObTp4lr7PpvLXdg0X+0yt5S8zCT8PC1nsbbMGG/eDoFqcX4e52PLmu/8Aj1LuYBlD3sbbNHrBEmDa31V99HFvJbTeynTaLHLmJNuoIA1tr3WaZrvbZWtojX9Nj4f5woVXimGPa4+5sAfdbw4tobK838V8MrsZUqvquLqTXPztbJaGiQG2E6GQbGdoW28Tp1qXhraxq1M7WNc4WMbkxYmOhd90nfxaPzC74h5zZTcWNoVHv7Cx+6pO8zVMzTVwr2MeYBIIIMxuIP6rXYXw2u4DLVcHGDmcCJsdQ0jczaAIiFvcJhsSyWVK3xGOEODhFzroIIPQg/VRM11yattpvOtP4xw1Jg/eVHloPtBAlzuw1K9GwTm/DaGelgDb2PCBt9IXn/hmCdRxNapncaDHljKZ4g0ObTe5zSTwgOcQAPau58LHA47FxI+kBXxW1b1hyzV3WbSvhCQTWlkSCYUFJBJCSaBpqKaBoQhA0JICBoQhBiQhCAQhCAQhCAUVJRQCEIQCJQkgcrDimZmOA1iR9tllQkxuNFbesxMOSxzOOm1vC+CWk3hzJN42Ie4H7q3hsVTbPxAabvmBj7PFnD/2yt+N4doY2poab2ntDuE/7lRxviIo0sx0vf6LFavrOpehS8W3MK+Of+0OFJjXGkCHVHEEBwaQQxoOsmJOkSNTbbYujmpFpbIIuNiDqFzLvGKlRv7qk+QdQCf1jW6s1vHcWWOYMO/4gkTldFuYW/kjpwl4VVNEfCqggMgMfBc1zOXMRo4CxJsdew2FXFNd/DGd3b0j6v0j9T2K5xvitdjC59FwcLkuzadb6LeeGeJCtTzEiWlon6/yn/hUn8p4+MdClBdT1icx0lz+NxHTa209l0uCpllNrTrqfqdlT8Jw7Mpqal73GZnThH+1bJasVNT7SxZsvtHrBhMJJhdmc0ICYQSCaiE0DCYSQgYTSTQCEIQCEIQY1FCEApKKEEkKKEAgoSKkCEkJoNCSUqNBoSQmhg8Qw/xKVSmNXNMfmF2/zAXDfFbXp5HG4cIG4vlcHWtBkEL0CV5r5he0OdjMPJw9RxDyOVzTkLwPaSDf77rllruIl2wW1Mw3OHwDcO85WufScZAzuBZaIaZ9MxY6LdZaQZOSpMeku3+srU+F49laiDMuiO/1sm/C19q3BfRontdZonXbduJj7+mHEYH47wajA2mxxIZJOYyYzmbgCLaW/TXVcXTo5mNENL3PIF8xHoH1JyrYY7xAU6ThmJqAautJ/wDxaTy1hX4mp+0VP4bDLAeZ2s/lBv8AX6JEfZVvbnUPRfDaRZSptPqDRP5jd38yVZVfA4plWmyowyx4kf0IPcEELOt0Q82ezUlFMIJISCaCSagphA0ICAgaEBCBoQhAIQhBhQkhSGhJCBoSQo0GolCSkNJJKUVNEpSkSgcolU8f4lRoNzVagb21J+jRcrkvEvOdR0tw7MgB9b4Lj9G6CdtemtletLW6c7Za17l03mTG/BwtV8w5wyN+r7W+gk/Zc75cpMfgadOxyhzHD5g45gfuuVxWMqVXB9So97ti/QRBlo0Ajpa26ueA+I/AqER+7qRI1hws0jqbFnct7hTmwTNOO45PH8qIy7t1PCxiPDauFfnw7c9MkzTmMto4Z27bfRXaPmGoKeT9nqzBk5CL7aroGZajGvaQQ64IUhSEXF15m/7evr/Ljz4fWxdQOrsyUjHBq5wANjGg/wCl1NFraNMuMBjGkk7AASVkp0QDJWg80+JAtdQp7wHRuTcsHUxt8zeqnHW2S0RCuW1cVJtK75F8Ub8N1F7g0lxewExIeSS0TuD/AFK7GV4w6CI27aCGkkjtEOHYxstv4Z5hxNGMtTNTEcL5c0TtPLwiRxRcar1pxb6eLXPriXqMphczgPN1CplbUBpvMa3ZJE2cO19F0VOoHAOaQWm4IuD9CuFqTXtoretupZk1AFNVXSUgophBIJqIUggYQkmgE0k0AhCEGBCSFIEISQNCSUoqcpSlKRKByk5250Wo8xeMfslLM1odUfIY0mBYS5x+UC68/wAb4lWrmalRz81w0elonlbES07gOtzLrTFNuXHJmrWdfXomJ8ewtMwazS7SGy8ydBwzdc34t5sqPDhhhkYNXuje2p4W3tF3dlyth6o1ywLi5gtkGHXuADHU7Jsfnc0uOpYPU0WfIMHRgIEw1tjuu9cNYZrZ7W46RdULnlzi5zzckzI7knisfyCEmuEwbFpAtA1McJIixki1gbIfUlturCGgtgEscSd5PoGY3uimSASCYzCCM1wxjyLgGbOC6uPYYZBjKIDHwMsDOCXaEkjQkk6NKMk8MGDcdb8OWfccuQdHMad0ZiCJJgBki5kMokuBBjUGPusoZPCLg+nq4uFuL3PaA0nlc1qjSdtp4D4waLg15mlUdBOzXuuHge1183R4PVdk6sMs/wBF5wDPFAcHWIPC1wJ3PKwkTOz2nra9gfE6rJptLqjWtLhwnNlFjLBcOkgRBG8gXODyfG3PtX9vT8Ty4rHpb9N7414oabDl9b7N6Duew3K5CC4gXLpgHQucSJM7Ekgg9I9kLPXxfx3ZxBJ4W9gTlFj7jMtOjWnWSVhygj5SMoOpyum9/VwB7osQXrtgwRjr+WfyvInLb8R0TIMawSGyJbrLiQQDlkAkjbOOiWcZc5iYM3F8zA98REEgxGh6BZGOLnNHNLTa/FUa+05gbDIIPtUDJp6u0+fmo23PtP6LRDLIi2xzSImN+PKTYkmB3i7ZV3B+J4ig0sp1Hsi7hYwRdxLSBGzfSAqtZgmqcwvn2deHUyOTqVkgCGzLQXRd/D++yjKcnDbYW0kKdb7RuY6dDgPN9dhisGvG8DI6wvBFjcgaR3XUYDzDhqxyiplf7X8J6GCbH7FeaU82hIgRaHkH94WmW5YmYMiCk10BvUicpnbNZpcBYuBtI03XO2GtnWue9e+XsYKYK5byNis1KpTLyTTdYEkkAi4E3gGf7WhdQFkvX1tpupb2rFkwpKAUgqrpBCAhA00ghA0JIQV0JIUqmkhCASlCUoAlRc6L7Jlct5z8V+HTFBh46l3kbMm4+rjDf9XcK1KzadK3tFa7lzXmLxL9pxWdhPw2cDI1IBkvaNyXC35Atc1ocWtHC1xGaDwul8SDBL2gBw6SDZY2MGZmt7gCxIOgadnHhE7Et6lWCScztyHTGaDlZUbIaLNAJiPlndbqxERqHmWtMzuSphwAcZHEw6PAAyPfAygWE9FDOWlpDjYU4AL7kUydCOrh+qnVpmCIHqqAWYNmUxz9yhrGy5xLbvaIAJOV2dm1uVm+ykhhFBwEvkEMdEwPTSBHqPSNtWhZKzAGuMNsa0fwvkYNuixte0gED1MZHobpTqMd1PL1VjExldbUVD62b1Wj2odCs2HVLN4TXAvT2DGDZIAcYIlrC9ogzLBBe3MNMph4A+bsp4lwzVvrVPrZvVaPalWaHENMwXud62G5rBgMFomwKkUMZXe4PLGk8Li54ALSZDXQ0D0k5XRFnK3h6lam1wky5rmulrnEhtMvykkbOdqTP2soYhmZryBJc3QMbcnEdWu+VZq1IOfUhtiXkcLjZ1WnTGpjRpVJjc8rRbUcKWIw5EmYeC8TLATApsAOpPqd9Nlla+5a+NXkxcEBxa63UhjWCL8RVixP5pNnMZ6q4GgBPKm0hxNzeOdu+J7tU6NlQHEwnLmcWOcZYZd+0OB9QnS1+ihTaC0Wbc0x6WbmqNiNlkokE0u+TmZviHn29kYeMrNLuo70/dU7KUbY4JaeA8TCdH/h037OjZPENJDrAXqxMjTJUGr+6VCmDlEi7QNGb0SzXN8ikCMpsLAHVg9eHdOx9iIOpT4qlm3L49BsX03jf50q1M8OUEETBAy/57wLh2Xm3TdBJHYbsPNQb0+VMsnLES5pgQwSTXfDQQdTEAxaUJWPC8Y7D1WVGWLeFzNiNCwXnXro6R0K9QwmIbUpsewyx4BH3XkjiDvbQn6WBHe0HqWvK6nyd4v8N5w9Qw2oTk+V8wWfeDHdpXDNT2jcO/j5PW3rPUu5CkFAKQWR6CYTCiEwgaaSEDQhCCshCFKoSQooBBSQpGLE1202PqPMMptLnHs0SV5TisW+vWqVKgEzJYbyNGtJHKJudgu585eIfDofDBh1UwTIBaxsFzhO+gHchefUWDMR6Re+mVo9V+V0S29pcey04a8bYvJvuYqyZZcL+qXZiJIEEl7huSMzjGoyEaJFocbyA+WsbGbVkNJMjSaYk6ydwUnPjNmFzq3sIeWiNORojS8WJCxVX3vc6C4BJzEwCLwXl7jEjhtqu8zpniNrRxDMucQYL3CCwc1OpoAToSP9KwEl7n34G2bOY2bWbF8p9+0KrWruezLJ4iesEQ+RtaSB9ltGMhx4YGeTIeLB+Z2hP4Sjtaf+UGRLGh1hb1dalRu7fmCzB+YN4vU087N8R+XsoUXcTQTfg5iI46JPqHXP/NSwzx+5ubClPGPfUqe3srKpZy4uOb1D3t5sRPt7J03lzqZn1Fgu+mfVXqOFnDoseHfAbc8Jo87elR527KVEgFnyim71Md6KTqhsR3RCNJhIbwzPw9GNNzWc4XYei2Xh3hlB2H+M6rkrNLA1mX1DPmEseZcXEuAIsMt9Ctcyn6In14fkbsxzjdp7oo0wAzhIIdQ5Cdnu5iqzG+lqzruEsNM0hMT8MWcxutZx0AKjh3EhhzTPw+dh1rE7hTw5DXUdbOoczGcz3aCVHDOEU9daI9dM6veeilEDDPM0b70udn4lQ9EsMTlZceqhzU/nKlhyJo660ednWoeijh3CGfmw/Mz21OyB4cXom2tLmp9avboseY/DJnYczNqD+3zKdGoAGn2tYfUzlpPf0+ZRe6GRJsHj1t5aNMdO6Hxke/jqXEAnmZtWZ1HZQa0lobAPAQWgsBcBUq5hLdDBmbaKVd16tzb4nO3aqw9FCrOZ0aAv5mmIqcLuEXhxaY/5Uo+oTN5md9AXW4u0y0no17tyoF2hBiYuZAAgZc0XFoHUAO3KT3gzBtZ1rZWkC8xtnEn5QeiC4l2Y2BubTDp4oafUQ8v4NSHyVCXqvgOMNbD06jpzkQ6RBzNsSR3ifutkF575O8QfTrU6OtOoDwg5gDEhwd9jP6bL0ELDlr62ejhv7V2mFIKAUgubskEJBNAIQhBWQmhSqgUlIpKQlV8TxgoUalZwJFNpdA1MaAfUq3C4Lzn44KgqYWmRkByvMTmO4b2aR9ZHZXpWbTpzyXildy5zG+JVsTNSo+XkSGCMoEtLWBh1Ewepg9FjY4SHD0uA3u4RLRJ9zmgwfcB0WPBCWj3AOaQIMOjK1uU6wSCDtIGyMK+I1zUybmxLgYDiDIjNlYD2INitsccQ86dzuZWHsgx7JzWgy0gvdHVz4aC2bDRa/GGzHOvMg3Nw22swMzs8/cq+63CBqRA65TDeBxsHPLnGDy9lrvFIyEi4EcXUCw1E3lxgnSPqa26Wp2Gw4NmLyNBo6wcABMBwb9nGIWypcTC4CCS4XDhE5xq0n3lafBv4Wl0kOuReDcjW4M6XEC3S2wwREAQDDm/XmOxDtuiispvHxfNSC459HO0c4afGdzD5WqTHERxmzBz+zDHqOrljfUhjpkWNszx/lkcw+b+ay16gzVbng+KPWOjKe7V0c5IvIbGY787eSgB06vTdMkWMNqC5pu0oNbofqo13QH62NbnZoTTZ7eynViavY1vw3702dkBkIiW8zuQAcFEbsMqLKcCfh70z6Xn00HHnMbqOLaBsfXiBdkD+G1urSeqTnN4xYlhqSGtc4gBjaYkOI7/oiZZmSHN0ECmdabPTRc7b6pUiYFwYdQ5mHRlRxum+GucPb8ZutNvopNYLXUXQAfvtTPooHm/1IJUXHNT0sKPNT/Cc7+6jRcbaerD81P8ADcUgQD9Gt3p8mHJ6KLIDZ70/w+WieyApuIbqP4Z52DTDMA0/MpV3HK7i0dW52+2mP7KAcAHiNGPHqYNGU29E8S8Zams5q3Ow6mmPb1REslZ5mtx/jc497Oyr4lxLzeTNQAyDxEvEfeW9dVZrPE1rm/xD6271mN9qpOEudrIl1pBPMXg/KMju4n6iJINgkZzcTB7kzH/k0xm0aW9bltbMSCWEkBos4uESAdqgGr+YD7GYafVaIgjRsOvHy0HbdD0UiGgZiCWOGmhLW6tPtycu7hHWBOtImdrvgniwwtYVHMD2uaQCy0SRdgOmpsdy5elYHG061MVKbszT+oPQjYryaoJJaYLjPQAkCQQNAHCCBsRfWFtfLHinwcTTBcclV2Q3sc92GOskfSfquGXHFo9o7aMGaaz6z09NCkFAKQWN6KYTCiFIIBCEIMEJQhClUQlCaEHNecPHHYVjKdL+LWmHe0db77Lz17ZaTJixJ3zOIguE63Fx0PVCFtwxHq87yJmbMZkOnlfkFrBrjdoeB6gQ3MY3A3QwRVY2nl/eZAAMw/ekWMumNXHpohC6S5x3B4h+kGwGUfK249JkBxy1DYxLpWu8bJgU4AfmhwGmYagdA0cIudzuhCpfqXSn8oVsznHK1oDGCDeTaJJJ+uyu0Xk23v8Apv2QhRToydtiypMMDiM7gNXCzpjQkaNatkGve6pBcQ8nn99ce5vRpQhdI6c57AoVHhsNdL2+5hu+v3HQKFdjh8RzhAe1xu2m71VwP6BCEjsVcVUabjLrVfdpbYuazlM8q2niXi3xMP8AA+EwCmavEJcSWuy2Doyznk3MkSmhNRMp3qGB1J7jVc1ts2II4aY1LRv2WGuIL8w0fW5GHSiI3TQphEoOe3NoPSeRv/1j0KiwMLbtbrT1aR/kmfS5CEPqLYhwAEmm7lab/DpnVx6yrj6D87WlpEufoWNnNXDYsD0SQkohVx1QhjpnjEAZrXqvfFm/LCgwDKHAwGhrhvAngqHc5Twlu8ShCr9W+MrHAmQ0EkxlOkkgFh6tJu0aN36rEzFMJsXEEt4ua5IZUk61GmRsI+spoTadQQILWiMuYDL0Bk5W2M5JBPUO7awc7MWtaSC7SLTFxJ2Mybb/AFMCFPxT69U8B8R/acOyrubO/M2xI7HX7rZAoQvPt3L1Mc7rCQKkChCq6JShCEH/2Q==",
      definitions: ["Hotel", "Passeios"],
      money: 8.007,
      describe:
        "Toronto, a capital da província de Ontário, é uma grande cidade canadense localizada ao longo da costa noroeste do Lago Ontário. Ela é uma metrópole dinâmica com um centro de arranha-céus imponentes, todos ofuscados pela famosa Torre CN.",
    },
    {
      id: 4,
      title: "Quebec - Canadá",
      persona: "Renata Clara",
      city: "Quebec",
      state: "Alagoas",
      country: "Canadá",
      imageMain:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QFCL3Kwvqnebszs8kI5DanX47lnpeknNWA&usqp=CAU",
      imagePersona:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3UyK7vdPu9kZ2WACUog-drM46XGQHkN3flCeE53RTBpAn1U11AjP8T8yohGb3FVcoFg&usqp=CAU",
      definitions: ["Hotel", "Passeios"],
      money: 8.107,
      describe:
        "A cidade de Quebec fica às margens do rio São Lourenço, na província canadense de Quebec, onde a maioria da população fala francês. Fundada em 1608, ela tem um centro colonial fortificado, que abrange o bairro de Vieux-Québec e o Palácio Real, com construções de pedra e ruas estreitas.",
    },
    {
      id: 5,
      title: "Gramado - RS",
      persona: "Ana Flora",
      city: "Gramado",
      state: "Alagoas",
      country: "Brasil",
      imageMain:
        "https://i.pinimg.com/originals/2a/7d/da/2a7dda68585846432f8f1e7e47d307d4.jpg",
      imagePersona:
        "https://static.vecteezy.com/ti/fotos-gratis/t2/3491890-rosto-close-up-retrato-de-menina-bonita-loira-com-pele-fresca-imagem-horizontal-gratis-foto.jpg",
      definitions: ["Hotel", "Passeios"],
      money: 2.705,
      describe:
        "Gramado é uma cidade com uma estância de montanha situada no estado mais a sul do Brasil, Rio Grande do Sul. Influenciada pelos colonos alemães do século XIX, a cidade possui um toque bávaro com chalés alpinos, chocolateiros e lojas de artesanato. Gramado é também conhecida pelas suas exibições de luzes de Natal e pelas hortênsias em flor na primavera.",
    },

    {
      id: 6,
      title: "Santiago - Chile",
      persona: "Ana Flora",
      city: "Santiago",
      state: "Alagoas",
      country: "Chile",
      imageMain:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBozstZkf-7SXp5ltD2MSHivOKgJ5rBaVwtA&usqp=CAU",
      imagePersona:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3UyK7vdPu9kZ2WACUog-drM46XGQHkN3flCeE53RTBpAn1U11AjP8T8yohGb3FVcoFg&usqp=CAU",
      definitions: ["Hotel", "Passeios"],
      money: 1.799,
      describe:
        "Santiago, capital e maior cidade do Chile, fica em um vale circundado pelos Andes cobertos pela neve e a cadeia de montanhas chilena. A Plaza de Armas, o coração do centro velho colonial da cidade, abriga 2 pontos turísticos históricos neoclássicos: o Palacio de la Real Audiencia de 1808, sede do museu de história nacional,",
    },
    {
      id: 7,
      title: "Santiago - Chile",
      persona: "Renata Clara",
      city: "Santiago",
      state: "Alagoas",
      country: "Chile",
      imageMain:
        "https://thumbs.dreamstime.com/b/paisagens-florestais-de-neve-alta-qualidade-explorar-beleza-impressionante-das-florestas-cobertas-nessas-incr%C3%ADveis-criadas-com-273279908.jpg",
      imagePersona:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3UyK7vdPu9kZ2WACUog-drM46XGQHkN3flCeE53RTBpAn1U11AjP8T8yohGb3FVcoFg&usqp=CAU",
      definitions: ["Praia", "Passeios"],
      money: 2.857,
      describe:
        "Santiago, capital e maior cidade do Chile, fica em um vale circundado pelos Andes cobertos pela neve e a cadeia de montanhas chilena. A Plaza de Armas, o coração do centro velho colonial da cidade, abriga 2 pontos turísticos históricos neoclássicos: o Palacio de la Real Audiencia de 1808, sede do museu de história nacional,",
    },
    {
      id: 8,
      title: "Oslo - Noruega",
      persona: "Ana Flora",
      city: "Oslo",
      state: "Alagoas",
      country: "Brasil",
      imageMain:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyt-HzFIPWXwuuTsJm8B8GkluTtA0_Spu17Q&usqp=CAU",
      imagePersona:
        "https://static.vecteezy.com/ti/fotos-gratis/t2/3491890-rosto-close-up-retrato-de-menina-bonita-loira-com-pele-fresca-imagem-horizontal-gratis-foto.jpg",
      definitions: ["Praia", "Passeios"],
      money: 3.705,
      describe:
        "A Noruega é um país escandinavo que abrange montanhas, geleiras e fiordes litorâneos profundos. Oslo, a capital, é uma cidade cheia de áreas verdes e museus. Navios vikings preservados do século IX são exibidos no Museu do Navio Viking de Oslo. Bergen, com suas casas coloridas de madeira, é o ponto de partida de cruzeiros rumo ao deslumbrante Fiorde de Sogn.",
    },
  ];

  return cards;
}
