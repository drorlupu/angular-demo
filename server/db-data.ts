
export const CATEGORIES: any = {
    0 : {
        id: 0,
        name: "Cats",
        iconLocation: "../assets/cat.svg"
    },
    1 : {
        id: 1,
        name: "Dogs",
        iconLocation: "../assets/dog.svg"
    },
    2 : {
        id: 2,
        name: "Birds",
        iconLocation: "../assets/bird.svg"
    },
    3 : {
        id: 3,
        name: "Snakes",
        iconLocation: "../assets/snake.svg"
    }
}

export const ANIMALS = {
    0 : {
        id: 0,
        categoryId: 0,
        nickName: "Luna",
        age: 5,
        story: "Named after the moon, Luna is a gentle and graceful cat with a fascination for the night sky. She was found roaming the streets and needs a new home.",
        imageUrl: "../assets/cats/luna.png"
    },
    1 : {
          id: 1,
          categoryId: 0,
          nickName: "Whiskers",
          age: 5,
          story: "Whiskers was a beloved family cat until his owners had to suddenly move and could not take him along. He is now searching for a new forever home where he can receive all the love and affection he deserves.",
          imageUrl: "../assets/cats/whiskers.png"
        },
    2 : {
          id: 2,
          categoryId: 0,
          nickName: "Shadow",
          age: 3,
          story: "Shadow was abandoned by his owners and has been struggling to survive on the streets. Despite his tough exterior, he is just a sweet and gentle cat in need of a loving home.",
          imageUrl: "../assets/cats/shadow.png"
        },
    3 : {
          id: 3,
          categoryId: 0,
          nickName: "Fluffy",
          age: 4,
          story: "Fluffy was surrendered to the shelter after her owners could no longer care for her. She is a gentle and affectionate cat who just wants to be loved and have a warm place to call home.",
          imageUrl: "../assets/cats/fluffy.png"
        },
    4 : {
          id: 4,
          categoryId: 0,
          nickName: "Mittens",
          age: 6,
          story: "Mittens was left behind when her owners moved away and has been struggling to survive on her own. She is now looking for a new family to take her in and give her the love and comfort she deserves.",
          imageUrl: "../assets/cats/mittens.png"
        },
    5 : {
          id: 5,
          categoryId: 0,
          nickName: "Socks",
          age: 2,
          story: "Socks was found as a stray and has been living at the shelter waiting for a forever home. She is a playful and energetic cat who would make the perfect addition to any family.",
          imageUrl: "../assets/cats/socks.png"
        },
    6 : {
          id: 6,
          categoryId: 0,
          nickName: "Smokey",
          age: 5,
          story: "Smokey was surrendered to the shelter after his owner passed away. He is a gentle and loving cat who just wants a new family to call his own.",
          imageUrl: "../assets/cats/smokey.png"
        },
    7 : {
          id: 7,
          categoryId: 0,
          nickName: "Tiger",
          age: 3,
          story: "Tiger was found as a stray and has been living at the shelter waiting for a forever home. Despite his rough start, he is a friendly and affectionate cat who deserves a chance at a happy life.",
          imageUrl: "../assets/cats/tiger.png"
        },
    8 : {
          id : 8,
          categoryId: 1,
          age: 4,
          nickName: "Johnny",
          story: "Johnny was a stray dog who was found wandering the streets, hungry and alone. He was taken in by a local animal rescue organization and given the love and care he needed to thrive. Despite his rough start in life, Johnny is a sweet and friendly dog who loves to play and cuddle with people. He is now looking for a forever home where he can be loved and cared for the rest of his life.",
          imageUrl: "../assets/dogs/johnny.jpg"
        },
    9 : {
          id : 9,
          categoryId: 1,
          age: 5,
          nickName: "Max",
          story: "Max was surrendered to the shelter by his previous owners who could no longer take care of him. He is a friendly and outgoing dog who loves to play and go for walks. Despite his rough start, Max is a happy and confident dog who loves people and other dogs. He is now looking for a forever home where he can be loved and cared for the rest of his life.",
          imageUrl: "../assets/dogs/max.jpg"
        },
    10: {
          id : 10,
          categoryId: 1,
          age: 4,
          nickName: "Charlie",
          story: "Charlie was found as a stray on the side of the road, emaciated and injured. He was taken in by a local animal rescue organization and given the medical care he needed to recover. Despite his rough start in life, Charlie is a friendly and affectionate dog who loves to play and cuddle with people. He is now looking for a forever home where he can be loved and cared for the rest of his life.",
          imageUrl: "../assets/dogs/charlie.jpg"
        },
    11: {
          id : 11,
          categoryId: 1,
          age: 10,
          nickName: "Rocky",
          story: "Rocky was rescued from a hoarding situation where he was one of many dogs living in unsanitary and overcrowded conditions. Despite his rough start, Rocky is a friendly and social dog who loves to play and be around people. He is now looking for a forever home where he can be loved and cared for the rest of his life.",
          imageUrl: "../assets/dogs/rocky.jpg"
        },
    12: {
          id : 12,
          categoryId: 1,
          age: 3,
          nickName: "Daisy",
          story: "Daisy was surrendered to the shelter by her previous owners who could no longer take care of her. She is a friendly and affectionate dog who loves to play and cuddle with people. Despite her rough start, Daisy is a happy and confident dog who loves people and other dogs. She is now looking for a forever home where she can be loved and cared for the rest of her life.",
          imageUrl: "../assets/dogs/daisy.jpg"
        },
    13: {
          id : 13,
          categoryId: 1,
          age: 6,
          nickName: "Lucy",
          story: "Lucy was rescued from a high-kill shelter where she was at risk of being euthanized. She is a friendly and outgoing dog who loves to play and go for walks. Despite her rough start, Lucy is a happy and confident dog who loves people and other dogs. She is now looking for a forever home where she can be loved and cared for the rest of her life.",
          imageUrl: "../assets/dogs/lucky.jpg"
        },
    14: {
          id : 14,
          categoryId: 1,
          age: 7,
          nickName: "Jack",
          story: "Jack was found as a stray on the streets, emaciated and injured. He was taken in by a local animal rescue organization and given the medical care he needed to recover. Despite his rough start in life, Jack is a friendly and affectionate dog who loves to play and cuddle with people. He is now looking for a forever home where he can be loved and cared for the rest of his life.",
          imageUrl: "../assets/dogs/jack.jpg"
        }  
}

export function findCategoryById(categoryId : number) {
    return CATEGORIES[categoryId];
}

export function filterAnimalsByCategoryId(categoryId : number) {
    return Object.values(ANIMALS).filter(animal => animal.categoryId == categoryId);;
}

