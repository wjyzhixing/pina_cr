<template>
<div class="testContainer">
	<div class="header">
		<div>
			<span>Home</span>
			<span>Pen</span>			
		</div>
		<div>
			<span>Stack</span>
			<span>Connection</span>			
		</div>
		<div>
			<span>Feed</span>
			<span>File-play</span>			
		</div>
		<div>
			<span>Lifebuoy</span>
			<span>Phone</span>			
		</div>
		<div>
			<span>Phont-hang-up</span>
			<span>Bell</span>
		</div>
		<div>
			<span>Stopwatch</span>
			<span>Printer</span>
		</div>
		<div>
			<span>Drawer</span>
			<span>User-minus</span>
		</div>
		<div>
			<span>Spinner</span>
			<span>Load-run</span>
		</div>
	</div>	
</div>
</template>

<script>
	
</script>

<style lang="less" scoped>
@font-face {
    font-family: 'icomoon';
    src:  url('../../../fonts/icomoon.eot?z9byv6');
    src:  url('../../../fonts/icomoon.eot?z9byv6#iefix') format('embedded-opentype'),
      url('../../../fonts/icomoon.ttf?z9byv6') format('truetype'),
      url('../../../fonts/icomoon.woff?z9byv6') format('woff'),
      url('../../../fonts/icomoon.svg?z9byv6#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
}

.testContainer{
	.header{
		font-size: 30px;

		span{
			display:inline-block;
			width:430px;
			height:62px;
			line-height: 62px;
			font-family: "icomoon";
		}
	}

}

</style>