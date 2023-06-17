const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const toggleBox = document.getElementById('toggle-box-checkbox');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Add event listener to the checkbox
toggleBox.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('night');
  } else {
    document.body.classList.remove('night');
  }
});

// Run the demo if in search result preview
function demo() {
  setInterval(function() {
    toggleBox.click();
  }, 1000);
}

if (document.location.pathname.indexOf('fullcpgrid') > -1) {
  demo();
}
