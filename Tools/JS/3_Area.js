const calculateArea = (shape, values) => {
        if(shape === 'circle'){
            return values**2 * 3.14;
        }
        else if(shape === 'rectangle'){
            return values[0]*values[1];
        }
        else if(shape === 'square'){
            return values**2;
        }
        else if(shape === 'triangle'){
            return values[0]*values[1]/2;
        }

    }
    const getAreas = (shapes, values_arr) => {
        let ans = [];
        for(let i=0; i<shapes.length; i++){
            var element = calculateArea(shapes[i], values_arr[i]);
            ans.push(element);
        }
        return Promise.resolve(ans);
    }
    console.log(getAreas(['circle', 'rectangle', 'square', 'triangle'], [[1], [3, 4], [3], [4,
    5]]).then(data => console.log(data)).catch(e=>console.log(e)))
    