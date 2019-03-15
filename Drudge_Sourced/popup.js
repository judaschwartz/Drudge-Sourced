document.getElementById('donate').addEventListener('click',function(e) {
        chrome.tabs.create({url: 'https://www.buymeacoffee.com/qJ0FKbh1Q'})
});
document.getElementById('site').addEventListener('click',function(e) {
        chrome.tabs.create({url: 'https://www.drudgereport.com/'})
});

function save_options() {
        var site_name = document.getElementById('site_name').checked;
        var site_icon = document.getElementById('site_icon').checked;
        var new_tab = document.getElementById('new_tab').checked;
        var site_refresh = document.getElementById('site_refresh').checked;
        chrome.storage.sync.set({
                site_name : site_name,
                site_icon : site_icon,
                new_tab : new_tab,
                site_refresh : site_refresh
        }, function() {
                var status = document.getElementById('status');
                status.textContent = 'Options saved.';
                chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                        if ((tabs[0].url).indexOf('drudgereport.com') > 0) {
                                chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
                        }
                });
                setTimeout(function() {status.textContent = '';}, 750);
        });
}

function restore_options() {
        chrome.storage.sync.get({
                site_name : true,
                site_icon : true,
                new_tab : false,
                site_refresh : false
        }, function(items) {
                document.getElementById('site_name').checked = items.site_name;
                document.getElementById('site_icon').checked = items.site_icon;
                document.getElementById('new_tab').checked = items.new_tab;
                document.getElementById('site_refresh').checked = items.site_refresh;
        });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('site_name').addEventListener('click', save_options);
document.getElementById('site_icon').addEventListener('click', save_options);
document.getElementById('new_tab').addEventListener('click', save_options);
document.getElementById('site_refresh').addEventListener('click', save_options);