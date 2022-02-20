import { useEffect, useState } from "react";

const useStateEffect = () => {
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);

    useEffect(()=> {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    useEffect(()=> {
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return {
        services,
        doctors
    }
}

export default useStateEffect;