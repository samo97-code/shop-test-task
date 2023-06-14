import {useToast} from 'vue-toastification'
import CustomErrorsToast from "../components/Toast/CustomErrorsToast.vue";

export const catchErrors = (e) => {
    const toast = useToast()

    //Validation Errors
    if (e.response.status === 422){
        let ul = document.createElement('ul');
        ul.setAttribute('class','errors-list');

        Object.values(e.response.data.errors).forEach((item)=>{
            let li = document.createElement('li');
            li.innerText = item[0]

            ul.appendChild(li)
        })

        const content = {
            component: CustomErrorsToast,
            props: {
                message: e.response.data.message,
                content: ul.outerHTML
            },
        }

        return toast.error(content)
    }


    if (e.response?.data?.message){
        return toast.error(e.response.data.message)
    }


    return toast.error('Something went wrong')
}