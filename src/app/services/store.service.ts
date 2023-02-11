import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import clone from "just-clone";
import { BehaviorSubject, distinctUntilChanged, map, Observable, share, shareReplay, tap } from "rxjs";
import { Animal } from "../model/animal";
import { Category } from "../model/category";

@Injectable({
    providedIn: 'root'
})


export class Store {

    private selectedAnimalsSubject = new BehaviorSubject<Animal[]>([]);
    selectedAnimals$ = this.selectedAnimalsSubject.asObservable();

    private selectedCountSubject = new BehaviorSubject<number>(0);
    selectedCount$ = this.selectedCountSubject.asObservable();
    
    private categorySubject = new BehaviorSubject<Category[]>([]);
    categories$: Observable<Category[]> = this.categorySubject.asObservable();
    animals$ : (Observable<Animal[]> | undefined)[];

    constructor(private http: HttpClient) {
        http.get<{ payload : Category[]}>('/api/categories')
            .subscribe(
                data => this.categorySubject.next(data.payload));

        this.animals$ = new Array();
        for (let i = 0; i < 10; i++) {
            this.animals$.push(undefined);
        }
    }

    filterAnimalsByCategory(categoryId : number) : Observable<Animal[]> {
        if (this.animals$[categoryId] == undefined)
        {
            this.animals$[categoryId] = this.http.get<{ payload: Animal[]}>(`/api/categories/${categoryId}/animals`)
                .pipe(
                    map(data => data.payload),
                    shareReplay()
                );
        }

        return this.animals$[categoryId] as Observable<Animal[]>;
    }

    checkAnimal(animal: Animal) {
        let category = this.animals$[animal.categoryId]!;
        category.pipe(
            tap(animalArray => {
                animalArray.filter(item => item.id == animal.id)[0].checked = animal.checked;
            })
        );

        this.notifyOnAnimalCount(animal);
        this.notifyOnSelectedAnimals(animal);
      }

    private notifyOnSelectedAnimals(animal: Animal) {
        const lastSelectedAnimals = clone(this.selectedAnimalsSubject.value);
        if (!animal.checked) {
            this.selectedAnimalsSubject.next(lastSelectedAnimals.filter(a => a.id == animal.id));
        }
        else {

            this.selectedAnimalsSubject.next(
                [...lastSelectedAnimals, animal]
            );
        }
    }

    private notifyOnAnimalCount(animal: Animal) {
        if (animal.checked) {
            this.selectedCountSubject.next(this.selectedCountSubject.value + 1);
        }
        else {
            this.selectedCountSubject.next(this.selectedCountSubject.value - 1);
        }
    }
}