// 11.2.2 전역 인터페이스 병합

<script type="text/javascript">
window.myVersion = "3.1.1";
</script>



// types/window.d.ts
interface Window {
    myVersion: string;
}



// index.ts
export function logWindowVersion() {
    console.log(`Window version is: ${window.myVersion}`);
    window.alert("Built-in window types still work! Hooray!");
}
