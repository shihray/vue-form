import cloneDeep from "bootstrap-vue/esm/utils/clone-deep";

/**
 * 數字3位一撇 (支持浮點數)
 * @param number
 */
export const numberWithCommas = (number) => {
    let parts = number.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
};

export const moment = require('moment-timezone');

export const dateFormatStr = "YYYY/MM/DD HH:mm:ss";
export const dayFormatStr = "YYYY/MM/DD";

export const dateFormat = (dateTime) => {
    return moment(dateTime).tz("America/Aruba").format(dateFormatStr);
};

export const dateToISOString = (str) => {
    str = str.replace(" ", "T");
    str = str.replace(/\//g, "-");
    return str + "-04:00";
}

export const getNowMonth = () => {
    let check = moment().tz("America/Aruba");
    let startOfMonth = check.startOf('month').format(dateFormatStr);
    let endOfMonth = check.endOf('month').format(dateFormatStr);

    return {
        startTime: startOfMonth,
        endTime: endOfMonth
    }
}
export const getNowDay = () => {
    let check = moment().tz("America/Aruba");
    return check.subtract(1, 'd').format(dayFormatStr);
}

export const getYesterday = () => {
    let check = moment().tz("America/Aruba");
    return check.subtract(1, 'd').format(dayFormatStr);
}

export const getNow = () => {
    return moment().tz("America/Aruba").format(dateFormatStr);
}

export const listToTree = (list, parentId, key) => {
    let map = {}, node, roots = [], i;
    for (i = 0; i < list.length; i += 1) {
        map[list[i].id] = i; // initialize the map
        list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node[key] !== parentId) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parent_id]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
};

export const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
};

export const isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
};

export const successAlert = (self, title, content) => {
    self.$swal.fire({
        icon: 'success',
        title: title,
        html: content,
        reverseButtons: true,
        confirmButtonText: "確定",
        showConfirmButton: true,
    })
};

export const waringAlert = (self, content) => {
    return self.$swal.fire({
        title: "警告",
        html: content,
        icon: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        reverseButtons: true,
        confirmButtonText: "確定",
        cancelButtonText: "取消"
    })
};

export const convertGameHundredBetRuleList = (json) => {
    let min = null, max = null;
    let newRule = [];
    for (let key in json) {
        if (json.hasOwnProperty(key)) {
            let data = json[key];
            let newObj = {};
            newObj.id = Number(key);
            newObj.name = data.name;
            newObj.minBet = data.min_bet;
            newObj.maxBet = data.max_bet;
            if (data.min_bet < min || !min) {
                min = data.min_bet;
            }

            if (data.max_bet > max || !max) {
                max = data.max_bet;
            }

            newRule.push(newObj);
        }
    }

    return {
        min: min,
        max: max,
        newRule: newRule
    };
};

export const convertObjectToArray = (obj) => {
    let map = Object.keys(obj).map(function (key) {
        let option = obj[key];
        option.id = key;
        return option;
    });
    return cloneDeep(map);
};

export const listGroupBy = (list, key) => {
    return cloneDeep(list).reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

/**
 * 陣列 1 裡面有陣列 2的資料
 * @param {number[]} a1 陣列 1 大
 * @param {number[]} a2 陣列 2 小
 */
export const arrayContainsOtherArray = (a1, a2) => {
    return a2.every(item => a1.includes(item));
}

export const hasOneOf = (list, arr) => {
    return list.some(item => arr.indexOf(item) > -1);
}
