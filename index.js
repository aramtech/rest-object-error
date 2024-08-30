class ObjectError {
    error = {};
    msg = "";
    /**
     *
     * @param {{
     *  status_code?: number;
     *  error?: {
     *      msg: string;
     *      [key:string]: any;
     *  };
     *  [key:string]: any;
     * }} error
     */

    

    constructor(error) {
        try {
            if (error?.error) {
                this.error = error.error;
                this.status_code = error.status_code || error.statusCode || 500;
            } else {
                this.error = error;
            }
        } catch (error) {
            // console.log(error)
        }
    }
    /**
     * @returns {String}
     */
    get_msg() {
        const err = this;
        return err.message || err.msg || err.error?.msg || err.error?.message;
    }
    toString() {
        return `${this.status_code}, ${this.error}, ${this.msg}`;
    }
}
export default ObjectError;
