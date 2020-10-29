<template>
  <div class="container">
    <div class="left">left</div>
    <div class="middle">middle</div>
    <div class="right">right</div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.container {
	display: flex;
	min-width: 600px;
	height: 100vh;
	.left {
		width: 50px;
		background-color: #f66;
		font-size: 1rem;
	}
	.middle {
		flex: 1;
		background-color: #66f;
		font-size: 1rem;
	}
	.right {
		width: 100px;
		background-color: #3c9;
		font-size: 1rem;
	}
}

// phone
@media screen and (max-width: 760px) {
	.left {
		display: none;
	}
	.right {
		display: none;
	}
}
// iPad
@media screen and (min-width: 768px) and (max-width: 1023px) {
	.right {
		display: none;
	}
}
</style>