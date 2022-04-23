/* There are two basketball teams, NepalA and NepalB. They played against each other 3 times. The team with the highest average score wins a trophy.
Your tasks:
Calculate the average score for each team, using the test data below.
Compare the team's average scores to determine the winner of the tournament, and print it to the console. (Can be draw as well)
Include a requirement for a minimum avergae score of 50 points. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 50 points.
Minimum score rule also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 50 points. Otherwise, no team wins the trophy
Test data:
Test Data 1: NepalA score 46, 58 and 39. NepalB score 48, 41 and 60
Test Data 2: NepalA score 47, 62 and 51. NepalB score 59, 45 and 73
Test Data 3: NepalA score 47, 62 and 51. NepalB score 59, 45 and 56 */


let NepalA = [46,58,39,47,62,51,47,62,51];
let NepalB = [48,41,60,59,45,73,59,45,56];


function average(array)
{
    let average = 0;
    for( let i = 0; i < array.length; i++)
    {
        average = average + array[i];
    }
    average = average/ array.length;
    return average;
}
//Average of NepalA and NepalB
console.log(average(NepalA));
console.log(average(NepalB));

//A wins,B wins or draw
if(average(NepalA) == average(NepalB))

console.log('draw');

else

 result = (average(NepalA) > average(NepalB)) ? 'NepalA is winner' : 'NepalB is winner';

 console.log(result);

 //minimum score 50
 if (average(NepalB) >= 50)
 console.log(result);

 else

 console.log('No winner');














