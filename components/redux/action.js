import axios from "axios";

export const getData = () => async (dispatch, getState) => {
    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const csrftoken = getCookie('csrftoken');

    dispatch({ type: 'loading', payload: true });

    try {
        const { data } = await axios.get("http://192.168.0.9:2020/v1/homedata/?format=json", { 'csrfmiddlewaretoken': csrftoken });

        console.log(data.products);
        dispatch({ type: 'data', payload: [...data] })
    } catch (error) {
        dispatch({ type: 'error', payload: error.message });
        console.log(error.message)
    }

}


