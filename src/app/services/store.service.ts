import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, map, Observable } from "rxjs";
import { Animal } from "../model/animal";
import { Category } from "../model/categoy";

@Injectable({
    providedIn: 'root'
})


export class Store {

    private subject = new BehaviorSubject<Category[]>([]);
    categories$: Observable<Category[]> = this.subject.asObservable();

    constructor(private http: HttpClient) {
        http.get<{ payload : Category[]}>('/api/categories')
            .subscribe(
                data => this.subject.next(data.payload));
    }

    filterAnimalsByCategory(categoryId : number) : Observable<Animal[]> {
        return this.http.get<{ payload: Animal[]}>(`/api/categories/${categoryId}/animals`)
            .pipe(
                map(data => data.payload),
                distinctUntilChanged()
            );
    }
}