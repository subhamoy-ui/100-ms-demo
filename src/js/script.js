import { HMSReactiveStore } from '@100mslive/hms-video-store';

const hms = new HMSReactiveStore();
const hmsStore = hms.getStore();
const hmsActions = hms.getActions();

const joinBtn = document.getElementById("join-btn");
joinBtn.addEventListener('click', () => {
    hmsActions.join({
        userName: document.getElementById('name').value,
        authToken: document.getElementById('token').value
    });
});