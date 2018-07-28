Sortable.create(document.getElementById('player_list_el'), {
    group: 'players',
    animation: 150,
    store: {
        get: function (sortable) {
            var order = localStorage.getItem(sortable.options.group);
            return order ? order.split('|') : [];
        },
        set: function (sortable) {
            var order = sortable.toArray();
            localStorage.setItem(sortable.options.group, order.join('|'));
        }
    },
    onAdd: function (evt){ console.log('added to market', [evt.item, evt.from]); },
    onUpdate: function (evt){ console.log('updated market', [evt.item, evt.from]); },
    onRemove: function (evt){ console.log('remove from market', [evt.item, evt.from]); },
    onStart:function(evt){ console.log('onStart.foo:', [evt.item, evt.from]);},
    onSort:function(evt){ console.log('onStart.foo:', [evt.item, evt.from]);},
    onEnd: function(evt){ console.log('onEnd.foo:', [evt.item, evt.from]);}
});

Sortable.create(document.getElementById('team_list_el'), {
    group: 'players',
    animation: 150,
    store: {
        get: function (sortable) {
            var order = localStorage.getItem(sortable.options.group);
            return order ? order.split('|') : [];
        },
        set: function (sortable) {
            var order = sortable.toArray();
            localStorage.setItem(sortable.options.group, order.join('|'));
        }
    },
    onAdd: function (evt){ console.log('added to team', [evt.item, evt.from]); },
    onUpdate: function (evt){ console.log('updated team', [evt.item, evt.from]); },
    onRemove: function (evt){ console.log('removed from team', [evt.item, evt.from]); },
    onStart:function(evt){ console.log('onStart.foo:', [evt.item, evt.from]);},
    onSort:function(evt){ console.log('onStart.foo:', [evt.item, evt.from]);},
    onEnd: function(evt){ console.log('onEnd.foo:', [evt.item, evt.from]);}
});