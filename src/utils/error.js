// import {LOGIN_PAGE_NAME} from '@/router'
import version from "@/utils/version";
import {getNow} from "@/utils/common";

const goToLoginErrorCodeList = [];

export function showError(self, error) {
    console.error(error, typeof error);

    let title = "";
    let content = "";
    let code = null;

    if (error instanceof Error) {
        title = "發生不明錯誤! ";
        content = error.message;
    } else if (typeof error === "object") {
        code = error.code;
        if (goToLoginErrorCodeList.indexOf(code) > -1) {
            goToLogin(self);
            return;
        }
        title = "錯誤碼 - " + code;
        content = error.apiCode + "<br><span class='text-danger'><strong>" + code + "</strong></span>";
    } else {
        title = "發生不明錯誤! ";
        content = error.length > 0 ? error : content;
    }

    self.$swal.fire({
        icon: 'error',
        title: title,
        html: convertErrorContent(content),
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        reverseButtons: true,
        showCancelButton: false,
        showConfirmButton: true,
    })
}

export function convertErrorContent(content) {
    content += `<br><span class="text-small">${getNow()}</span>`
    content += `<br><span class="text-small">${version}</span>`
    return content;
}

export function goToLogin(self) {
    console.log("goToLogin");
    //self.$router.push({name: LOGIN_PAGE_NAME});
}


/**
 * @return {boolean}
 */
export function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
