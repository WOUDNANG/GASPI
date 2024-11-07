import React, { useState, useRef } from 'react';

const SubmissionFormModal = ({ showModal, onClose }) => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        ville: '',
        adresse: '',
        precision: '',
    });

    const [errors, setErrors] = useState({});

    if (!showModal) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.nom.trim()) newErrors.nom = 'Nom est requis';
        if (!formData.prenom.trim()) newErrors.prenom = 'Prénom est requis';
        if (!formData.email.trim()) {
            newErrors.email = 'Email est requis';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email n\'est pas valide';
        }
        if (!formData.telephone.trim()) {
            newErrors.telephone = 'Téléphone est requis';
        } else if (!/^\d{9,}$/.test(formData.telephone)) {
            newErrors.telephone = 'Téléphone doit contenir au moins 9 chiffres';
        }
        if (!formData.ville.trim()) newErrors.ville = 'Ville est requise';
        if (!formData.adresse.trim()) newErrors.adresse = 'Adresse est requise';
        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Handle form submission logic here
            onClose(); // Close the modal
        }
    };

    const handleReset = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
        setFormData({
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            ville: '',
            adresse: '',
            precision: '',
        });
        setErrors({});
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg border-2 border-brown-600 relative w-[50%]">
                <button className="absolute top-2 right-2 text-black" onClick={onClose}>Fermer</button>
                <h2 className="text-2xl font-bold mb-4">Votre agence</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <select
                        name="agence"
                        className="block w-full p-2 mb-4 border rounded"
                        value={formData.agence}
                        onChange={handleChange}
                    >
                        <option>Douala</option>
                        <option>Yaoundé</option>
                    </select>
                    <h2 className="text-2xl font-bold mb-4">Vos informations personnelles</h2>
                    <input
                        type="text"
                        name="nom"
                        className="block w-full p-2 mb-4 border rounded"
                        placeholder="Nom"
                        value={formData.nom}
                        onChange={handleChange}
                    />
                    {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
                    <input
                        type="text"
                        name="prenom"
                        className="block w-full p-2 mb-4 border rounded"
                        placeholder="Prénom"
                        value={formData.prenom}
                        onChange={handleChange}
                    />
                    {errors.prenom && <p className="text-red-500 text-sm">{errors.prenom}</p>}
                    <input
                        type="email"
                        name="email"
                        className="block w-full p-2 mb-4 border rounded"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    <input
                        type="tel"
                        name="telephone"
                        className="block w-full p-2 mb-4 border rounded"
                        placeholder="Téléphone"
                        value={formData.telephone}
                        onChange={handleChange}
                    />
                    {errors.telephone && <p className="text-red-500 text-sm">{errors.telephone}</p>}
                    <input
                        type="text"
                        name="ville"
                        className="block w-full p-2 mb-4 border rounded"
                        placeholder="Votre ville"
                        value={formData.ville}
                        onChange={handleChange}
                    />
                    {errors.ville && <p className="text-red-500 text-sm">{errors.ville}</p>}
                    <input
                        type="text"
                        name="adresse"
                        className="block w-full p-2 mb-4 border rounded"
                        placeholder="Votre adresse"
                        value={formData.adresse}
                        onChange={handleChange}
                    />
                    {errors.adresse && <p className="text-red-500 text-sm">{errors.adresse}</p>}
                    <textarea
                        name="precision"
                        className="block w-full p-2 mb-4 border rounded"
                        placeholder="Précision"
                        value={formData.precision}
                        onChange={handleChange}
                    ></textarea>
                    <div className="flex justify-end space-x-2">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" type="submit">Envoyer</button>
                        <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400" type="button" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmissionFormModal;