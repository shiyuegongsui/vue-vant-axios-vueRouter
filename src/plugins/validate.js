var validateList = {
    phone: function (value) {
        var exp = /^1\d{10}$/;
        return exp.test(value);
    }
};

export const validate = validateList;