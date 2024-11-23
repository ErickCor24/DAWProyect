// Elements
const buttons = {
  searchBtn: document.querySelector('button.searchBtn'),
  filterBtn: document.querySelector('button.filterBtn'),
  sortBtn: document.querySelector('button.sortBtn'),
  backNavBtn: document.getElementById('back-arrow'),
  nextNavBtn: document.getElementById('next-arrow'),
};

const modalElements = {
  modal: document.getElementById('ticket-modal'),
  closeBtnModal: document.querySelector('.modal-content .close-btn'),
  modalBackBtn: document.querySelector('#modal-backBtn'),
  modalGoToChat: document.querySelector('#modal-goToChatBtn'),
};

const ticketItems = document.querySelectorAll('.ticket-item');

// Methods
const handleMouseOver = (btn, color = '#d1d5db') => {
  btn.style.cursor = 'pointer';
  btn.dataset.originalBackground = btn.style.backgroundColor;
  btn.style.backgroundColor = color;
};

const handleMouseOut = (btn) => {
  btn.style.backgroundColor = btn.dataset.originalBackground;
};

const enableScroll = () => {
  document.body.style.overflow = 'auto';
};

const showModal = () => {
  modalElements.modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

const hideModal = () => {
  modalElements.modal.style.display = 'none';
  enableScroll();
};

const navigateToChat = () => {
  window.location.href = 'chat.html';
};

// Listeners
buttons.filterBtn.addEventListener('mouseover', () => handleMouseOver(buttons.filterBtn));
buttons.filterBtn.addEventListener('mouseout', () => handleMouseOut(buttons.filterBtn));
buttons.sortBtn.addEventListener('mouseover', () => handleMouseOver(buttons.sortBtn));
buttons.sortBtn.addEventListener('mouseout', () => handleMouseOut(buttons.sortBtn));
buttons.backNavBtn.addEventListener('mouseover', () => handleMouseOver(buttons.backNavBtn));
buttons.backNavBtn.addEventListener('mouseout', () => handleMouseOut(buttons.backNavBtn));
buttons.nextNavBtn.addEventListener('mouseover', () => handleMouseOver(buttons.nextNavBtn));
buttons.nextNavBtn.addEventListener('mouseout', () => handleMouseOut(buttons.nextNavBtn));
buttons.searchBtn.addEventListener('mouseover', () => handleMouseOver(buttons.searchBtn, '#005ce6'));
buttons.searchBtn.addEventListener('mouseout', () => handleMouseOut(buttons.searchBtn));
modalElements.modalBackBtn.addEventListener('mouseover', () => handleMouseOver(modalElements.modalBackBtn));
modalElements.modalBackBtn.addEventListener('mouseout', () => handleMouseOut(modalElements.modalBackBtn));
modalElements.modalBackBtn.addEventListener('click', hideModal);
modalElements.modalGoToChat.addEventListener('mouseover', () => handleMouseOver(modalElements.modalGoToChat, '#005ce6'));
modalElements.modalGoToChat.addEventListener('mouseout', () => handleMouseOut(modalElements.modalGoToChat));
modalElements.modalGoToChat.addEventListener('click', navigateToChat);

ticketItems.forEach((ticketItem) => {
  ticketItem.addEventListener('click', showModal);
});

modalElements.closeBtnModal.addEventListener('click', hideModal);

window.addEventListener('click', (event) => {
  if (event.target === modalElements.modal) {
    hideModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideModal();
  }
});
