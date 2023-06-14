import {ref, watch} from "vue";

export const usePaginate = (fetchCallback) => {
    const query = ref(`page=1`)
    const pagination = ref({
        total: 1,
        current: 1,
        next: '',
        prev: '',
    })

    watch(query, () => {
        fetchCallback()
    })

    const updatePagination = (resp) => {
        pagination.value = {
            total: resp.data.last_page,
            first: resp.data.first_page_url,
            last: resp.data.last_page_url,
            next: resp.data.next_page_url,
            prev: resp.data.prev_page_url,
            current: resp.data.current_page,
            query: query.value,
        }
    }

    return {
        query, pagination, updatePagination
    }
}