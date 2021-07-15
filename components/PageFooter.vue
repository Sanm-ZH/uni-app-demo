<template>
    <view class="page-footer" className="margin-bottom-30">
        <text>Written by {{ $author }}</text>
    </view>
</template>

<style lang="scss">
.page-footer {
    width: 100%;
    text-align: center;
    font-weight: 800;
    color: #b9b9b9;
    font-size: 14px;
    animation: shadowText 10s infinite;
    position: absolute;
    bottom: 15px;
}

@keyframes shadowText {
    0% {
    }
    20% {
        text-shadow: -5px 4px 3px rgba(44, 153, 57, 0.5);
        color: rgb(44, 153, 57);
    }
    50% {
        text-shadow: 0px 4px 3px rgba(97, 218, 251, 0.5);
        color: rgb(97, 218, 251);
    }
    75% {
        text-shadow: 5px 4px 3px rgba(64, 160, 255, 0.5);
        color: rgb(64, 160, 255);
    }
    100% {
    }
}

@media (max-width: 18.75rem) {
    .page-footer {
        font-size: 0.75rem;
    }
}
</style>
