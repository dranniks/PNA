
import { EditFormComponent } from "../../components/edit-form/index.js";
import { ajax } from "../../modules/ajax.js";
import { l2Urls } from "../../modules/l2Urls.js";
import { MainPage } from "../main/index.js";

export class EditPage {
    constructor(parent, id = null) {
        this.parent = parent;
        this.id = id;
        this.isEditMode = !!id;
    }

    get pageRoot() {
        return document.getElementById('edit-page');
    }

    getHTML() {
        return `<div id="edit-page"></div>`;
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        if (this.isEditMode) {
            this.loadExistingData();
        } else {
            this.showForm();
        }
    }

    async loadExistingData() {
        ajax.get(l2Urls.getL2ById(this.id), (data, status) => {
            if (status === 200) {
                this.showForm(data);
            } else {
                console.error('Ошибка загрузки данных');
            }
        });
    }

    showForm(data = null) {
        const form = new EditFormComponent(this.pageRoot, data);
        form.render((formData) => {
            if (this.isEditMode) {
                this.updateL2(formData);
            } else {
                this.createL2(formData);
            }
        });
    }

    createL2(data) {
        ajax.post(l2Urls.createL2(), data, (response, status) => {
            if (status === 201) {
                new MainPage(this.parent).render();
            }
        });
    }

    updateL2(data) {
        ajax.patch(l2Urls.updateL2ById(this.id), data, (response, status) => {
            if (status === 200) {
                new MainPage(this.parent).render();
            }
        });
    }
}