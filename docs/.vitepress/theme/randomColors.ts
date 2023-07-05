const themeColor: Array<any> = [
    {
        '--vp-c-brand-color': '#646cff',
        '--vp-c-brand-light-color': '#747bff',
        '--vp-c-brand-lighter-color': '#9499ff',
        '--vp-c-brand-lightest-color': '#bcc0ff',
        '--vp-c-brand-dark-color': '#535bf2',
        '--vp-c-brand-darker-color': '#454ce1',
        '--vp-c-brand-dimm-color': 'rgba(100, 108, 255, 0.08)',
        '--webkit-linear-gradient-color-2': '#bd34fe 30%',
        '--webkit-linear-gradient-color-3': '#41d1ff',
        '--linear-gradient-color-2': '#bd34fe 50%',
        '--linear-gradient-color-3': '#47caff 50%',
    },
    {
        '--vp-c-brand-color': '#00bcd4',
        '--vp-c-brand-light-color': '#26c6da',
        '--vp-c-brand-lighter-color': '#4dd0e1',
        '--vp-c-brand-lightest-color': '#80deea',
        '--vp-c-brand-dark-color': '#00acc1',
        '--vp-c-brand-darker-color': '#0097a7',
        '--vp-c-brand-dimm-color': 'rgba(0, 188, 212, 0.08)',
        '--webkit-linear-gradient-color-2': '#00bcd4 30%',
        '--webkit-linear-gradient-color-3': '#21db46',
        '--linear-gradient-color-2': '#00bcd4 50%',
        '--linear-gradient-color-3': '#21db46 50%',
    },
    {
        '--vp-c-brand-color': '#4caf50',
        '--vp-c-brand-light-color': '#66bb6a',
        '--vp-c-brand-lighter-color': '#81c784',
        '--vp-c-brand-lightest-color': '#a5d6a7',
        '--vp-c-brand-dark-color': '#43a047',
        '--vp-c-brand-darker-color': '#388e3c',
        '--vp-c-brand-dimm-color': 'rgba(76, 175, 80, 0.08)',
        '--webkit-linear-gradient-color-2': '#4caf50 30%',
        '--webkit-linear-gradient-color-3': '#b5bf5c',
        '--linear-gradient-color-2': '#4caf50 50%',
        '--linear-gradient-color-3': '#b5bf5c 50%',
    },
    {
        '--vp-c-brand-color': '#ff9800',
        '--vp-c-brand-light-color': '#ffb74d',
        '--vp-c-brand-lighter-color': '#ffcc80',
        '--vp-c-brand-lightest-color': '#ffe0b2',
        '--vp-c-brand-dark-color': '#f57c00',
        '--vp-c-brand-darker-color': '#e65100',
        '--vp-c-brand-dimm-color': 'rgba(255, 152, 0, 0.08)',
        '--webkit-linear-gradient-color-2': '#ff9800 30%',
        '--webkit-linear-gradient-color-3': '#ff4433',
        '--linear-gradient-color-2': '#ff9800 50%',
        '--linear-gradient-color-3': '#ff4433 50%',
    },
    {
        '--vp-c-brand-color': '#ff69b4',
        '--vp-c-brand-light-color': '#ff8ac7',
        '--vp-c-brand-lighter-color': '#ffb0d5',
        '--vp-c-brand-lightest-color': '#ffd8f1',
        '--vp-c-brand-dark-color': '#e354a7',
        '--vp-c-brand-darker-color': '#c43c8b',
        '--vp-c-brand-dimm-color': 'rgba(255, 105, 180, 0.08)',
        '--webkit-linear-gradient-color-2': '#ff69b4 30%',
        '--webkit-linear-gradient-color-3': '#af62cb',
        '--linear-gradient-color-2': '#ff69b4 50%',
        '--linear-gradient-color-3': '#af62cb 50%',
    },
    {
        '--vp-c-brand-color': '#9136d8',
        '--vp-c-brand-light-color': '#a94fd8',
        '--vp-c-brand-lighter-color': '#c886f3',
        '--vp-c-brand-lightest-color': '#e1b3ff',
        '--vp-c-brand-dark-color': '#7d33be',
        '--vp-c-brand-darker-color': '#692eaa',
        '--vp-c-brand-dimm-color': 'rgba(145, 54, 216, 0.08)',
        '--webkit-linear-gradient-color-2': '#bd34fe 30%',
        '--webkit-linear-gradient-color-3': '#41d1ff',
        '--linear-gradient-color-2': '#bd34fe 50%',
        '--linear-gradient-color-3': '#41d1ff 50%',
    },
    {
        '--vp-c-brand-color': '#ff6464',
        '--vp-c-brand-light-color': '#ff7474',
        '--vp-c-brand-lighter-color': '#ff9494',
        '--vp-c-brand-lightest-color': '#ffbcbc',
        '--vp-c-brand-dark-color': '#f25353',
        '--vp-c-brand-darker-color': '#e14545',
        '--vp-c-brand-dimm-color': 'rgba(255, 100, 100, 0.08)',
        '--webkit-linear-gradient-color-2': '#fe34bd 30%',
        '--webkit-linear-gradient-color-3': '#5e24c6',
        '--linear-gradient-color-2': '#fe34bd 50%',
        '--linear-gradient-color-3': '#6933d1 50%',
    },
    {
        '--vp-c-brand-color': '#ffc107',
        '--vp-c-brand-light-color': '#ffd54f',
        '--vp-c-brand-lighter-color': '#ffe082',
        '--vp-c-brand-lightest-color': '#ffecb3',
        '--vp-c-brand-dark-color': '#ffa000',
        '--vp-c-brand-darker-color': '#ff8f00',
        '--vp-c-brand-dimm-color': 'rgba(255, 193, 7, 0.08)',
        '--webkit-linear-gradient-color-2': '#ffc107 30%',
        '--webkit-linear-gradient-color-3': '#ff4e4e',
        '--linear-gradient-color-2': '#ffc107 50%',
        '--linear-gradient-color-3': '#ff4e4e 50%',
    },
]

function randomIndex(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

function setDefaultTheme() {
    let item = {
        '--vp-c-brand-color': '#646cff',
        '--vp-c-brand-light-color': '#747bff',
        '--vp-c-brand-lighter-color': '#9499ff',
        '--vp-c-brand-lightest-color': '#bcc0ff',
        '--vp-c-brand-dark-color': '#535bf2',
        '--vp-c-brand-darker-color': '#454ce1',
        '--vp-c-brand-dimm-color': 'rgba(100, 108, 255, 0.08)',
        '--webkit-linear-gradient-color-2': '#bd34fe 30%',
        '--webkit-linear-gradient-color-3': '#41d1ff',
        '--linear-gradient-color-2': '#bd34fe 50%',
        '--linear-gradient-color-3': '#47caff 50%',
    }
    setRandomColorsWithTransition(item)
}

function setRandomColorsWithTransition(item) {
    for (let key in item) {
        document.documentElement.style.setProperty(key, item[key]);
    }
}

setDefaultTheme()

setInterval(() => {
    setRandomColorsWithTransition(randomIndex(themeColor))
}, 3000)
