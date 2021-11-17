<template>
    <view>
        <i class="taichi">
            <!-- <div class="topC"></div>
            <div class="bottomC"></div> -->
            <!-- <div class="leftC"></div>
            <div class="rightC"></div> -->
        </i>
    </view>
</template>

<style lang="scss" scoped>
view {
    margin: 0;
    padding: 0;
    background: #aaaaaa;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.taichi {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(black 50%, white 50%);
    display: flex;
    align-items: center;
    box-shadow: 2px 2px 5px #cccccc;
}

// .topC,
// .bottomC {
//     width: 400px;
//     height: 200px;
// }
// .topC {
//     border-radius: 200px 200px 0 0;
//     background: #fff;
// }
// .bottomC {
//     background: #000;
//     border-radius: 0 0 200px 200px;
// }

.taichi::before,
.taichi::after {
    display: block;
    content: '';
    width: 50%;
    height: 50%;
    border-radius: 50%;
    animation: changeSize 1s infinite alternate linear;
}

.taichi::before {
    background: radial-gradient(#000 25%, #fff 35%);
    transform-origin: 0% 50%;
}

.taichi::after {
    background: radial-gradient(#fff 25%, #000 35%);
    transform-origin: 100% 50%;
    animation-delay: -1s;
}

@keyframes changeSize {
    from {
        transform: scale(0.5);
    }
    to {
        transform: scale(1.5);
    }
}
</style>
