age=17

if [ $age -gt  18]; then
echo "you can vote"
elif [ $age -eq 17 ]; then
echo "you can apply to vote"
else
echo "you can't vote"
fi
