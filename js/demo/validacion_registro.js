const d = document;

export default function ContactFormRegistroValidacion() {
    const $form = d.querySelector("contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");
    console.log($inputs);



    d.addEventListener["submit", (e) => {

        e.preventDefault();
        alert("enviando formulario");
    }];
}