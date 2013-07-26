KISSY.add('mosaics/colorlist/index', function(S, Brick) {

  var Colorlist = Brick.extend({
    constructor: function() {
      Colorlist.superclass.constructor.apply(this, arguments)
    },
    bind: function() {
    },
    removeSelected: function() {
        var self = this

        self.get('el').all('li').removeClass('selected')
    }
  },

  {
    ATTRS: {
        min:{
          value: false
        },
        align: {
          value: {
            node: false,
            points: ['bl', 'tl'],
            offset: [0, 0]
          }
        },
        data:{
            value: {
              colorList: ['#d81e06', '#f4ea2a', '#1afa29', '#1296db', '#13227a', '#d4237a', '#ffffff', '#e6e6e6', '#dbdbdb', '#cdcdcd', '#bfbfbf', '#8a8a8a', '#707070', '#515151', '#2c2c2c', '#000000', '#ea986c', '#eeb174', '#f3ca7e', '#f9f28b', '#c8db8c', '#aad08f', '#87c38f', '#83c6c2', '#7dc5eb', '#87a7d6', '#8992c8', '#a686ba', '#bd8cbb', '#be8dbd', '#e89abe', '#e8989a', '#e16632', '#e98f36', '#efb336', '#f6ef37', '#afcd51', '#7cba59', '#36ab60', '#1baba8', '#17ace3', '#3f81c1', '#4f68b0', '#594d9c', '#82529d', '#a4579d', '#db649b', '#dd6572', '#d81e06', '#e0620d', '#ea9518', '#f4ea2a', '#8cbb1a', '#2ba515', '#0e932e', '#0c9890', '#1295db', '#0061b2', '#0061b0', '#004198', '#122179', '#88147f', '#d3227b', '#d6204b'],
            }
        }
    },

    FIRES:{
        selected: 'selected'
    },

    EVENTS: {
        'li': {
            click: function(e) {
                var self = this
                var color = S.one(e.currentTarget).attr('val')

                self.removeSelected()
                S.one(e.currentTarget).addClass('selected')
                self.fire(Colorlist.FIRES.selected, {
                    color: color
                })
            }
        }
    }
  }, 'Colorlist')

  return Colorlist
  
}, {
  requires: [
    'brix/base'
  ]
})